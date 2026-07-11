const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < M; i++) {
  let [r, c] = input[i + 1].split(' ').map(Number);
  r--;
  c--;
  A[i] = [r, c];
}
A.reverse();

const R_set = new Uint8Array(N);
const C_set = new Uint8Array(N);

const M_set = new Set();
const M_key = (i, j) => `${i}_${j}`;

let ans = 0;
for (const [r, c] of A) {
  if (!R_set[r] && !C_set[c]) {
    const k = M_key(r, c);
    if (!M_set.has(k)) {
      M_set.add(k);
      ans++;
    }
  }
  R_set[r] = 1;
  C_set[c] = 1;
}
console.log(ans);
