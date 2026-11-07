const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);

const min = (a, b) => {
  return a < b ? a : b;
};
const max = (a, b) => {
  return a < b ? b : a;
};

const B = [0n];
for (let i = 0; i < N; i++) {
  B[i + 1] = B[i] + A[i];
}

const L_min = [0n];
const L_max = [0n];
for (let i = 0; i < N; i++) {
  L_min[i + 1] = min(L_min[i], B[i + 1]);
  L_max[i + 1] = max(L_max[i], B[i + 1]);
}
const R_min = [];
const R_max = [];
R_min[N] = B[N];
R_max[N] = B[N];
for (let i = N - 1; i >= 0; i--) {
  R_min[i] = min(R_min[i + 1], B[i]);
  R_max[i] = max(R_max[i + 1], B[i]);
}

// console.log({ B, L_min, L_max, R_min, R_max });

let ans = R_max[0] - R_min[0] + 1n;

for (let i = 0; i < N; i++) {
  const delta = -A[i] - A[i];

  const l_min = L_min[i];
  const l_max = L_max[i];

  const r_min = R_min[i + 1] + delta;
  const r_max = R_max[i + 1] + delta;

  const a_min = min(l_min, r_min);
  const a_max = max(l_max, r_max);
  ans = max(ans, a_max - a_min + 1n);
}

console.log(ans.toString());
