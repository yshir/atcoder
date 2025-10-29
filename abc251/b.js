const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, W] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const set = new Set();
const buf = 3;

for (let i = 0; i <= N + buf; i++) {
  for (let j = i + 1; j <= N + buf; j++) {
    for (let k = j + 1; k <= N + buf; k++) {
      const now = (A[i] || 0) + (A[j] || 0) + (A[k] || 0);
      if (now > 0 && now <= W) {
        set.add(now);
      }
    }
  }
}
console.log(set.size);
