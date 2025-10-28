const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

let ans = Number.MAX_VALUE;
let t;

for (let i = 0; i < 10; i++) {
  const set = new Set();
  for (t = 0; ; t++) {
    for (let j = 0; j < N; j++) {
      if (!set.has(j) && S[j][t % 10] === String(i)) {
        set.add(j);
        break;
      }
    }
    if (set.size === N) {
      break;
    }
  }
  ans = Math.min(ans, t);
}

console.log(ans);
