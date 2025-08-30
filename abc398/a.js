const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const cnt = N % 2 == 1 ? 1 : 2;

let s = '';
for (let i = 0; i < cnt; i++) {
  s += '=';
}
for (let i = 0; i < N - cnt; i += 2) {
  s = `-${s}-`;
}
console.log(s);
