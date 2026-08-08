const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const C = input[1].split(' ').map(Number);

const cnt = {};
for (let i = 0; i < N; i++) {
  cnt[C[i]] = cnt[C[i]] || 0;
  cnt[C[i]]++;
}

let max = 0;
for (const k in cnt) {
  max = Math.max(max, cnt[k]);
}

console.log(N - max);
