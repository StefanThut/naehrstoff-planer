import { $, $$ } from './utils.js';
import { density } from './data.js';
export function renderAlternatives(el, state){
  el.innerHTML = `<div class="card"><h2>Alternativen & Zusätze</h2><div id="a-box"></div></div>`;
  const box = $('#a-box', el);
  function recompute(detail){
    const {goals, sums} = detail;
    if(!goals || !goals.kcal){ box.innerHTML = '<div class="muted">Bitte im Menü Benutzer wählen.</div>'; return; }
    const tol=0.1, needP = sums.p < goals.p*(1-tol), needC = sums.c < goals.c*(1-tol), fatHigh = sums.f > goals.f*(1+tol);
    const scored = state.foods.map(f=>{ const d=density(f); let score=0; if(needP) score+=d.p100*2; if(needC) score+=d.c100; if(fatHigh) score+=(1/(1+d.f100))*2; if((f.tags||[]).includes("fleischlos")) score*=1.15; if((f.tags||[]).includes("saisonal")) score*=1.05; if((f.tags||[]).includes("lokal")) score*=1.05; return {f,score,d}; }).sort((a,b)=>b.score-a.score).slice(0,8);
    box.innerHTML='';
    const intro=document.createElement('p'); intro.textContent=`Vorschläge: ${needP?"Protein erhöhen. ":""}${needC?"KH ergänzen. ":""}${fatHigh?"Fett reduzieren. ":""}`; box.appendChild(intro);
    const table=document.createElement('table'); table.innerHTML='<thead><tr><th>Lebensmittel</th><th>Tags</th><th>P/100kcal</th><th>F/100kcal</th><th>KH/100kcal</th></tr></thead><tbody></tbody>';
    const tb=table.querySelector('tbody');
    for(const t of scored){ const tr=document.createElement('tr'); tr.innerHTML=`<td>${t.f.name}</td><td>${(t.f.tags||[]).join(', ')}</td><td>${t.d.p100}</td><td>${t.d.f100}</td><td>${t.d.c100}</td>`; tb.appendChild(tr); }
    box.appendChild(table);
  }
  window.addEventListener('menuChanged', (e)=> recompute(e.detail));
}
