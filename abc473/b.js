const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = new Map();
for (let i = 0; i < N; i++) {
  map.set(A[i], (map.get(A[i]) || 0) + 1);
}

let ans = 0;
for (let [k, v] of map) {
  v %= 2;
  if (v > 0) {
    ans += k;
  }
}
console.log(ans);
