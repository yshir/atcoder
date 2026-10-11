const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
let L = input[1].split(' ').map(Number);
let R = input[2].split(' ').map(Number);

const INF = 1e10;

L = [INF, ...L];
R = [...R, INF];

const MIN_R = new Uint32Array(N);
MIN_R[0] = R[0];
for (let i = 1; i < N; i++) {
  MIN_R[i] = Math.min(MIN_R[i - 1], R[i]);
}
const MIN_L = new Uint32Array(N);
MIN_L[N - 1] = L[N - 1];
for (let i = N - 2; i >= 0; i--) {
  MIN_L[i] = Math.min(MIN_L[i + 1], L[i]);
}

// console.log({ MIN_L, MIN_R });

for (let i = 0; i < Q; i++) {
  let [s, t] = input[i + 3].split(' ').map(Number);
  s--;
  t--;

  if (s < t) {
    let ans = R[s];
    if (s > 0) ans = Math.min(ans, L[s] + MIN_R[s - 1]);
    console.log(ans);
  } else {
    let ans = L[s];
    if (s < N - 1) ans = Math.min(ans, R[s] + MIN_L[s + 1]);
    console.log(ans);
  }
}
