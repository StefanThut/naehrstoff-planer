import { $, $$, clamp, round1 } from './utils.js';
import { userGoals } from './data.js';
import { save } from './storage.js';
export function renderMenu(el, state){
  el.innerHTML = `<div class="card">
    <h2>Menüplan</h2>
    <div class="row"><label style="min-width:220px">Benutzer:<select id="m-users" multiple size="3"></select></label><span class="pill">Früh 25% · Mittag 35% · Abend 35% · Snack 5%</span></div>
    <div class="grid2">
      ${["frueh","mittag","abend","snack"].map(k=>`<div class='card'><h3>${label(k)}</h3><div class='meal-box' data-meal='${k}'></div><div class='row'><button class='ghost add-item' data-meal='${k}'>Lebensmittel hinzufügen</button></div></div>`).join('')}
    </div>
    <hr><h3>Summe vs. Ziel</h3>
    <div class="grid2">
      <div><div class="row"><strong>Kalorien</strong><span class="right mono" id="sum-kcal">0</span></div><div class="bar"><span id="bar-kcal"></span></div></div>
      <div><div class="row"><strong>Protein (g)</strong><span class="right mono" id="sum-p">0</span></div><div class="bar"><span id="bar-p"></span></div></div>
      <div><div class="row"><strong>Fett (g)</strong><span class="right mono" id="sum-f">0</span></div><div class="bar"><span id="bar-f"></span></div></div>
      <div><div class="row"><strong>KH (g)</strong><span class="right mono" id="sum-c">0</span></div><div class="bar"><span id="bar-c"></span></div></div>
    </div>
    <div class="row" style="margin-top:10px"><button id="m-clear" class="ghost">Menü leeren</button><button id="m-suggest" class="ok">Auto-Vorschlag</button></div>
  </div>`;
  function label(k){ return {frueh:"Frühstück", mittag:"Mittag", abend:"Abend", snack:"Snack"}[k]||k; }
  const sel = $('#m-users', el);
  sel.innerHTML=''; state.users.forEach(u=>{ const opt=document.createElement('option'); opt.value=u.id; opt.textContent=u.name; sel.appendChild(opt); });
  const handler = (ev)=> addTo('mittag', ev.detail.food);
  window.addEventListener('addToMenu', handler);
  $$('.add-item', el).forEach(btn=> btn.onclick = ()=> openPicker(btn.dataset.meal));
  function openPicker(meal){
    const q = prompt('Lebensmittel suchen (Name enthält):','');
    const cand = state.foods.filter(f=> !q || f.name.toLowerCase().includes((q||'').toLowerCase()));
    if(cand.length===0){ alert('Nichts gefunden'); return; }
    const names = cand.map((f,i)=> `${i+1}) ${f.name}`).join('\n');
    const idx = +prompt(`Nummer wählen:\n${names}`,'1');
    const f = cand[idx-1]; if(!f) return; addTo(meal, f);
  }
  function addTo(meal, food){
    state.menu[meal].push({name: food.name, qty: 1}); save(state); drawMeals(); drawBars();
  }
  function drawMeals(){
    ["frueh","mittag","abend","snack"].forEach(mealKey=>{
      const box = el.querySelector(`.meal-box[data-meal='${mealKey}']`); box.innerHTML='';
      for(const sel of state.menu[mealKey]){
        const food = state.foods.find(x=>x.name===sel.name); if(!food) continue;
        const factor = food.portion/100;
        const row = document.createElement('div'); row.className='kpi';
        row.innerHTML = `<div style='flex:1'><div><strong>${sel.name}</strong> <span class='pill mono'>${sel.qty} × Portion</span> <span class='mono muted' style='float:right'>${food.portion} ${food.unit||"g"}</span></div>
        <div class='small'>≈ ${Math.round(sel.qty*food.kcal*factor)} kcal · P ${round1(sel.qty*food.p*factor)} · F ${round1(sel.qty*food.f*factor)} · KH ${round1(sel.qty*food.c*factor)}</div></div>
        <div style='min-width:200px'><div class='row'>
          <button class='ghost dec'>−</button><input class='qty' type='number' step='0.5' min='0' style='width:70px' value='${sel.qty}'><button class='ghost inc'>+</button><button class='warn del'>Entf</button>
        </div></div>`;
        row.querySelector('.dec').onclick = ()=>{ sel.qty = Math.max(0, sel.qty - 0.5); if(sel.qty===0) remove(mealKey, sel.name); save(state); drawMeals(); drawBars(); };
        row.querySelector('.inc').onclick = ()=>{ sel.qty = sel.qty + 0.5; save(state); drawMeals(); drawBars(); };
        row.querySelector('.del').onclick = ()=>{ remove(mealKey, sel.name); save(state); drawMeals(); drawBars(); };
        row.querySelector('.qty').onchange = (e)=>{ sel.qty = Math.max(0, +e.target.value||0); if(sel.qty===0) remove(mealKey, sel.name); save(state); drawMeals(); drawBars(); };
        box.appendChild(row);
      }
    });
  }
  function remove(meal,name){ state.menu[meal] = state.menu[meal].filter(x=>x.name!==name); }
  function selectedUsers(){ const ids = Array.from(sel.selectedOptions).map(o=>o.value); return state.users.filter(u=> ids.includes(u.id)); }
  function goalsCombined(){ const users = selectedUsers(); let g={kcal:0,p:0,f:0,c:0}; for(const u of users){ const x = userGoals(u); g.kcal+=x.kcal; g.p+=x.p; g.f+=x.f; g.c+=x.c; } return g; }
  function menuSum(){ let kcal=0,p=0,f=0,c=0; for(const k of ["frueh","mittag","abend","snack"]) for(const it of state.menu[k]){ const f=state.foods.find(x=>x.name===it.name); if(!f) continue; const factor=f.portion/100; kcal+=it.qty*f.kcal*factor; p+=it.qty*f.p*factor; c+=it.qty*f.c*factor; fat=it.qty*f.f*factor; }; return {kcal:Math.round(kcal), p:round1(p), f:round1(fat||0), c:round1(c)}; }
  function drawBars(){
    const g = goalsCombined(); const s = menuSum();
    $('#sum-kcal', el).textContent = s.kcal; $('#sum-p', el).textContent = s.p; $('#sum-f', el).textContent = s.f; $('#sum-c', el).textContent = s.c;
    const pct = (x,goal)=> goal>0? Math.max(0, Math.min(160, x/goal*100)):0;
    $('#bar-kcal', el).style.width = pct(s.kcal,g.kcal)+'%';
    $('#bar-p', el).style.width = pct(s.p,g.p)+'%';
    $('#bar-f', el).style.width = pct(s.f,g.f)+'%';
    $('#bar-c', el).style.width = pct(s.c,g.c)+'%';
    window.dispatchEvent(new CustomEvent('menuChanged', {detail:{goals:g, sums:s}}));
  }
  $('#m-clear', el)?.addEventListener('click', ()=>{ state.menu = {frueh:[], mittag:[], abend:[], snack:[]}; save(state); drawMeals(); drawBars(); });
  $('#m-suggest', el)?.addEventListener('click', ()=>{ const g=goalsCombined(); const s=menuSum(); function add(n,m){ const f=state.foods.find(x=>x.name===n); if(f) state.menu[m].push({name:n, qty:1}); } if(s.p<g.p*0.9){add("Skyr","frueh"); add("Tofu natur","abend");} if(s.c<g.c*0.9){add("Vollkornbrot","frueh"); add("Reis gekocht","mittag");} if(s.f<g.f*0.9){add("Mandeln","snack");} save(state); drawMeals(); drawBars(); });
  sel.addEventListener('change', drawBars);
  drawMeals(); drawBars();
}
