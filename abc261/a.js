const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [l, r, ll, rr] = input[0].split(' ').map(Number);

console.log(Math.max(0, Math.min(rr, r) - Math.max(ll, l)));
