const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const W = input[2].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  map[A[i]] = map[A[i]] || [];
  map[A[i]].push(W[i]);
}

let ans = 0;
for (const k in map) {
  const v = map[k];
  if (v.length > 1) {
    let max = 0;
    let max_i = 0;
    for (let i = 0; i < v.length; i++) {
      if (max < v[i]) {
        max = v[i];
        max_i = i;
      }
    }

    let sum = 0;
    for (let i = 0; i < v.length; i++) {
      if (i !== max_i) {
        sum += v[i];
      }
    }

    ans += sum;
  }
}
console.log(ans);
