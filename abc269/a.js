const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);

const ans = (a + b) * (c - d);

console.log(ans === -0 ? 0 : ans);
console.log('Takahashi');
