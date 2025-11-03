import { $, $$ } from './utils.js';
export function initTabs(pages){
  const tabs = [
    {key:"users", label:"Benutzer"},
    {key:"foods", label:"Lebensmittel"},
    {key:"menu", label:"Menüplan"},
    {key:"alts", label:"Alternativen"},
    {key:"dist", label:"Verteilung"},
  ];
  const nav = $('#tabs'); nav.innerHTML = '';
  for(const t of tabs){
    const btn = document.createElement('button');
    btn.className = 'tab'; btn.dataset.tab = t.key; btn.textContent = t.label;
    btn.onclick = ()=> activate(t.key, pages);
    nav.appendChild(btn);
  }
  activate('users', pages);
}
export function activate(key, pages){
  document.querySelectorAll('.tab').forEach(b=> b.classList.toggle('active', b.dataset.tab===key));
  Object.entries(pages).forEach(([k, el])=> el.classList.toggle('active', k===key));
}
