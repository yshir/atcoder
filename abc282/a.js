const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(Number);

const alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

let s = '';
for (let i = 0; i < K; i++) {
  s += alpha[i];
}
console.log(s);
