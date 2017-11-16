const time = require('.');
console.assert(time(new Date('2017-11-16 21:16')) === '🕤');
console.assert(time(new Date('2017-11-16 23:00')) === '🕚');
console.assert(time(new Date('2017-11-16 22:49')) === '🕚');
