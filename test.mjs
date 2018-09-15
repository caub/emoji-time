import time from './index.mjs';

console.assert(time(new Date('2017-11-16 21:16')) === '🕤');
console.assert(time(new Date('2017-11-16 23:00')) === '🕚');
console.assert(time(new Date('2017-11-16 22:49')) === '🕚');

console.assert(time('21:16') === '🕤');
console.assert(time('23:00') === '🕚');
console.assert(time('22:49') === '🕚');

console.log('✔️  all good')
