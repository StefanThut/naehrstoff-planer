import { $, $$, round1 } from './utils.js';
import { save } from './storage.js';
export function renderDistribution(el, state){
  el.innerHTML = `<div class="card"><h2>Verteilung auf Personen</h2><div id="d-box"></div><hr><h3>Macronährstoffe pro Person</h3><div id="d-sum"></div></div>`;
  const box=$('#d-box', el), sumBox=$('#d-sum', el);
  function selectedUsers(){ const ids = Array.from(document.querySelectorAll('#m-users option:checked')).map(o=>o.value); return state.users.filter(u=> ids.includes(u.id)); }
  function gatherItems(){ const a=[]; for(const k of ["frueh","mittag","abend","snack"]) for(const it of state.menu[k]) a.push({name:it.name, qty:it.qty}); return a; }
  function renderTable(){
    const users=selectedUsers(), items=gatherItems();
    if(users.length===0){ box.innerHTML='<div class="muted">Bitte Benutzer im Menü auswählen.</div>'; sumBox.innerHTML=''; return; }
    const tbl=document.createElement('table'); tbl.innerHTML='<thead><tr><th>Lebensmittel</th>'+users.map(u=>`<th>${u.name} (%)</th>`).join('')+'<th>Summe</th></tr></thead><tbody></tbody>';
    const tb=tbl.querySelector('tbody');
    for(const it of items){ const tr=document.createElement('tr'); tr.innerHTML='<td>'+it.name+'</td>'+users.map(u=>`<td><input type="number" min="0" step="1" class="d-num" data-user="${u.id}" data-food="${it.name}"></td>`).join('')+'<td class="mono d-sum">0%</td>'; tb.appendChild(tr); }
    box.innerHTML=''; box.appendChild(tbl);
    document.querySelectorAll('.d-num').forEach(inp=>{ const key='f::'+inp.dataset.food; const per=(state.dist[key]?.[inp.dataset.user]) ?? Math.round(100/users.length); inp.value=per; });
    document.querySelectorAll('.d-num').forEach(inp=> inp.addEventListener('input', recalc));
    recalc();
  }
  function recalc(){
    const rows=Array.from(box.querySelectorAll('tbody tr'));
    for(const r of rows){ const sum=Array.from(r.querySelectorAll('.d-num')).reduce((a,i)=>a+(+i.value||0),0); r.querySelector('.d-sum').textContent=sum+'%'; }
    state.dist=state.dist||{};
    document.querySelectorAll('.d-num').forEach(i=>{ const key='f::'+i.dataset.food; if(!state.dist[key]) state.dist[key] = {}; state.dist[key][i.dataset.user] = +i.value||0; });
    save(state); renderSums();
  }
  function renderSums(){
    const users=selectedUsers(); const perUser={}; users.forEach(u=> perUser[u.id]={kcal:0,p:0,f:0,c:0});
    function info(name){ return state.foods.find(x=>x.name===name); }
    for(const k of ["frueh","mittag","abend","snack"]) for(const sel of state.menu[k]){ const f=info(sel.name); if(!f) continue; const factor=f.portion/100; const kcal=sel.qty*f.kcal*factor; const p=sel.qty*f.p*factor; const fat=sel.qty*f.f*factor; const c=sel.qty*f.c*factor; const distKey='f::'+sel.name; for(const u of users){ const share=(state.dist[distKey]?.[u.id] ?? Math.round(100/users.length))/100; perUser[u.id].kcal+=kcal*share; perUser[u.id].p+=p*share; perUser[u.id].f+=fat*share; perUser[u.id].c+=c*share; } }
    const tbl=document.createElement('table'); tbl.innerHTML='<thead><tr><th>Person</th><th>Kalorien</th><th>Protein</th><th>Fett</th><th>KH</th></tr></thead><tbody></tbody>'; const tb=tbl.querySelector('tbody');
    for(const u of users){ const s=perUser[u.id]; const tr=document.createElement('tr'); tr.innerHTML=`<td>${u.name}</td><td>${Math.round(s.kcal)}</td><td>${round1(s.p)}</td><td>${round1(s.f)}</td><td>${round1(s.c)}</td>`; tb.appendChild(tr); }
    sumBox.innerHTML=''; sumBox.appendChild(tbl);
  }
  window.addEventListener('menuChanged', renderTable);
  renderTable();
}
