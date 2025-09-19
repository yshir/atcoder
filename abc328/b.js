const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const D = input[1].split(' ').map(Number);

let cnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = 1; j <= D[i]; j++) {
    const s = `${i + 1}${j}`;
    if (new Set([...s]).size === 1) {
      cnt++;
    }
  }
}
console.log(cnt);
