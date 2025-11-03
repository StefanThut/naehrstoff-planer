import { $, $$, uid } from './utils.js';
import { userGoals } from './data.js';
import { save } from './storage.js';
export function renderUsers(el, state){
  el.innerHTML = `<div class="card">
    <h2>Benutzer</h2>
    <div class="grid2">
      <div>
        <label>Name</label><input id="u-name" placeholder="z. B. Alex">
        <label>Geschlecht</label>
        <select id="u-sex"><option value="divers">divers</option><option value="weiblich">weiblich</option><option value="maennlich">männlich</option></select>
        <label>Gewicht (kg)</label><input id="u-weight" type="number" step="0.1" placeholder="70">
        <label>Tätigkeit</label>
        <select id="u-activity"><option value="sitzend">sitzend</option><option value="moderat">moderat</option><option value="aktiv">aktiv</option></select>
        <label>Ziel</label>
        <select id="u-goal"><option value="erhalt">Erhalt</option><option value="aufbau">Aufbau</option><option value="verlust">Verlust</option></select>
        <div class="row" style="margin-top:8px">
          <button id="u-add" class="ok">Benutzer hinzufügen</button>
          <button id="u-reset" class="ghost">Eingaben leeren</button>
        </div>
      </div>
      <div>
        <h2>Liste</h2>
        <div id="u-list"></div>
      </div>
    </div>
  </div>`;
  const list = $('#u-list', el);
  function draw(){
    list.innerHTML='';
    for(const u of state.users){
      const g = userGoals(u);
      const card = document.createElement('div'); card.className='kpi'; card.innerHTML = `
        <div>
          <div><strong>${u.name}</strong> <span class="pill small">${u.goal}</span></div>
          <div class="small">Gewicht ${u.weight} kg · Tätigkeit ${u.activity} · CF ${g.cf} kcal/kg</div>
          <div class="small">Ziele: P ${g.p} g · F ${g.f} g · KH ${g.c} g</div>
        </div>
        <div style="min-width:140px">
          <div class="row">
            <button class="ghost edit">Bearbeiten</button>
            <button class="warn del">Löschen</button>
          </div>
        </div>`;
      card.querySelector('.edit').onclick = ()=>{ $('#u-name', el).value=u.name; $('#u-sex', el).value=u.sex; $('#u-weight', el).value=u.weight; $('#u-activity', el).value=u.activity; $('#u-goal', el).value=u.goal; };
      card.querySelector('.del').onclick = ()=>{ state.users = state.users.filter(x=>x!==u); save(state); draw(); };
      list.appendChild(card);
    }
  }
  draw();
  $('#u-add', el).onclick = ()=>{
    const u = { id:uid(), name:$('#u-name', el).value||'Person '+(state.users.length+1), sex:$('#u-sex', el).value, weight:+($('#u-weight', el).value||70), activity:$('#u-activity', el).value, goal:$('#u-goal', el).value };
    state.users.push(u); save(state); draw();
  };
  $('#u-reset', el).onclick = ()=>{ $('#u-name', el).value=''; $('#u-sex', el).value='divers'; $('#u-weight', el).value=''; $('#u-activity', el).value='moderat'; $('#u-goal', el).value='erhalt'; };
}
