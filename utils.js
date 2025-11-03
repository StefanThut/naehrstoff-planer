export const $ = (sel, el=document) => el.querySelector(sel);
export const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
export const round1 = x => Math.round(x*10)/10;
export const clamp = (x,a,b) => Math.max(a, Math.min(b,x));
export const uid = () => Math.random().toString(36).slice(2,9);
