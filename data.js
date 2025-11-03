export const defaults = {
  users: [{id:"u1", name:"Standard", sex:"divers", weight:70, activity:"moderat", goal:"erhalt"}],
  foods: [
    {name:"Vollkornbrot", unit:"g", portion:50, kcal:230, p:9, f:3, c:40, tags:["getreide","vegetarisch","vegan","lokal"]},
    {name:"Haferflocken", unit:"g", portion:50, kcal:370, p:13, f:7, c:60, tags:["getreide","vegan","lokal"]},
    {name:"Reis gekocht", unit:"g", portion:150, kcal:130, p:2.7, f:0.3, c:28, tags:["getreide","vegan"]},
    {name:"Kartoffeln gekocht", unit:"g", portion:200, kcal:87, p:2, f:0.1, c:20, tags:["vegan","lokal","saisonal"]},
    {name:"Linsen gekocht", unit:"g", portion:150, kcal:115, p:9, f:0.4, c:20, tags:["huelse","vegan","fleischlos","lokal"]},
    {name:"Tofu natur", unit:"g", portion:100, kcal:120, p:12, f:7, c:2, tags:["soja","vegan","fleischlos"]},
    {name:"Skyr", unit:"g", portion:150, kcal:64, p:11, f:0.2, c:4, tags:["milch","vegetarisch"]},
    {name:"Mandeln", unit:"g", portion:30, kcal:580, p:21, f:50, c:22, tags:["nuesse","vegan","lokal"]},
    {name:"Ketchup", unit:"g", portion:20, kcal:100, p:1.3, f:0.2, c:25, tags:["sauce","vegan","lokal"]},
    {name:"Pesto (Basilikum)", unit:"g", portion:20, kcal:450, p:4, f:43, c:6, tags:["sauce","vegetarisch"]},
  ],
  menu: { frueh:[], mittag:[], abend:[], snack:[] },
  dist: {}
};
export function cfForActivity(a){ return a==="sitzend"?30 : a==="aktiv"?37 : 33; }
export function userGoals(u){
  const cf = cfForActivity(u.activity);
  let kcal = u.weight * cf;
  if(u.goal==="aufbau") kcal *= 1.08;
  if(u.goal==="verlust") kcal *= 0.9;
  const p = u.weight * 1.1;
  const f = u.weight * 0.85;
  const c = Math.max(0, (kcal - (p*4 + f*9))/4);
  return {kcal:Math.round(kcal), p:Math.round(p*10)/10, f:Math.round(f*10)/10, c:Math.round(c*10)/10, cf};
}
export function density(food){
  const per100kcal = (val)=> (food.kcal>0)? Math.round((val/(food.kcal/100))*10)/10 : 0;
  return { p100: per100kcal(food.p), f100: per100kcal(food.f), c100: per100kcal(food.c) };
}
