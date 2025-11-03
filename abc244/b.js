const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const T = input[1];

let x = 0;
let y = 0;
let d = 0;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

for (let i = 0; i < N; i++) {
  if (T[i] === 'S') {
    x += dx[d % 4];
    y += dy[d % 4];
  } else {
    d++;
  }
}
console.log([x, y].join(' '));
