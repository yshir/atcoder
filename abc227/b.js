const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1].split(' ').map(Number);

const set = new Set();
for (let a = 1; 3 * a <= 1000; a++) {
  for (let b = 1; 3 * b <= 1000; b++) {
    const sum = 4 * a * b + 3 * a + 3 * b;
    if (sum <= 1000) set.add(sum);
  }
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  if (!set.has(S[i])) {
    cnt++;
  }
}
console.log(cnt);
