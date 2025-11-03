import { $ } from './utils.js';
import { defaults } from './data.js';
import { load } from './storage.js';
import { initTabs } from './ui-tabs.js';
import { renderUsers } from './users.js';
import { renderFoods } from './foods.js';
import { renderMenu } from './menu.js';
import { renderAlternatives } from './alternatives.js';
import { renderDistribution } from './distribution.js';

const state = load(defaults);
initTabs({ users: $('#page-users'), foods: $('#page-foods'), menu: $('#page-menu'), alts: $('#page-alts'), dist: $('#page-dist') });
renderUsers($('#page-users'), state);
renderFoods($('#page-foods'), state);
renderMenu($('#page-menu'), state);
renderAlternatives($('#page-alts'), state);
renderDistribution($('#page-dist'), state);
window.__STATE__ = state;
