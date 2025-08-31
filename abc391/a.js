const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const D = input[0];

if (D === 'N') console.log('S');
if (D === 'E') console.log('W');
if (D === 'W') console.log('E');
if (D === 'S') console.log('N');
if (D === 'NE') console.log('SW');
if (D === 'NW') console.log('SE');
if (D === 'SE') console.log('NW');
if (D === 'SW') console.log('NE');
