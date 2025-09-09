const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [R, G, B] = input[0].split(' ').map(Number);
const C = input[1];

if (C === 'Red') {
  console.log(Math.min(G, B));
}
if (C === 'Green') {
  console.log(Math.min(R, B));
}
if (C === 'Blue') {
  console.log(Math.min(G, R));
}
