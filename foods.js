import { $, $$ } from './utils.js';
import { save } from './storage.js';
export function renderFoods(el, state){
  el.innerHTML = `<div class="card">
    <h2>Lebensmittel</h2>
    <div class="row"><input id="f-search" placeholder="Suche (Name/Tag)"><button id="f-add">Neu</button></div>
    <small>Tags: fleischlos, vegan, vegetarisch, saisonal, lokal, huelse, soja, milch, getreide, sauce</small>
    <div id="f-list" style="margin-top:10px"></div>
  </div>`;
  const list = $('#f-list', el);
  function draw(){
    const q = ($('#f-search', el).value||'').toLowerCase();
    list.innerHTML='';
    const foods = state.foods.slice().filter(f=> f.name.toLowerCase().includes(q) || (f.tags||[]).join(',').toLowerCase().includes(q)).sort((a,b)=> a.name.localeCompare(b.name));
    for(const f of foods){
      const card = document.createElement('div'); card.className='kpi'; card.innerHTML = `
        <div>
          <div><strong>${f.name}</strong></div>
          <div class="small">${f.kcal} kcal · P ${f.p} g · F ${f.f} g · KH ${f.c} g (pro 100 g)</div>
          <div class="chips">${(f.tags||[]).map(t=>`<span class="chip">${t}</span>`).join(' ')}</div>
        </div>
        <div style="min-width:160px">
          <div class="row">
            <button class="ok add">Zu Menü</button>
            <button class="ghost edit">Bearbeiten</button>
            <button class="warn del">Entf</button>
          </div>
        </div>`;
      card.querySelector('.add').onclick = ()=> window.dispatchEvent(new CustomEvent('addToMenu', {detail:{food:f}}));
      card.querySelector('.edit').onclick = ()=> edit(f);
      card.querySelector('.del').onclick = ()=>{ state.foods = state.foods.filter(x=>x!==f); save(state); draw(); };
      list.appendChild(card);
    }
  }
  function edit(food){
    const name = prompt('Name:', food?.name || '');
    if(!name) return;
    const kcal = +prompt('kcal /100g:', food?.kcal ?? 0);
    const p = +prompt('Protein g/100g:', food?.p ?? 0);
    const f = +prompt('Fett g/100g:', food?.f ?? 0);
    const c = +prompt('KH g/100g:', food?.c ?? 0);
    const portion = +prompt('Portionsgrösse:', food?.portion ?? 100);
    const tags = prompt('Tags (Komma):', (food?.tags||[]).join(', '));
    const obj = {name, kcal, p, f, c, portion, unit: food?.unit || 'g', tags: (tags||'').split(',').map(s=>s.trim()).filter(Boolean)};
    const idx = state.foods.findIndex(x=>x.name.toLowerCase()===name.toLowerCase());
    if(idx>=0) state.foods[idx]=obj; else state.foods.push(obj);
    save(state); draw();
  }
  $('#f-add', el).onclick = ()=> edit(null);
  $('#f-search', el).addEventListener('input', draw);
  draw();
}
