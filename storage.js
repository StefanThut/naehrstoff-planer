const KEY = "np_mod_v1";
export function load(defaults){
  try{ const raw = localStorage.getItem(KEY);
    if(!raw) return JSON.parse(JSON.stringify(defaults));
    const obj = JSON.parse(raw);
    return Object.assign(JSON.parse(JSON.stringify(defaults)), obj);
  }catch(e){ return JSON.parse(JSON.stringify(defaults)); }
}
export function save(state){ localStorage.setItem(KEY, JSON.stringify(state)); }
