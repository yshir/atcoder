let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[line++].split(' ').map(Number);
const A = [];
for (let i = 0; i < M; i++) {
  let [l, r] = input[line++].split(' ').map(Number);
  l--;
  r--;
  A[i] = [l, r];
}
const [Q] = input[line++].split(' ').map(Number);
const B = [];
for (let i = 0; i < Q; i++) {
  let [s, t] = input[line++].split(' ').map(Number);
  s--;
  t--;
  B[i] = [s, t];
}

const lower_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

const L = [];
const R = [];
for (let i = 0; i < N; i++) {
  L[i] = [];
  R[i] = [];
}
for (let i = 0; i < M; i++) {
  const [l, r] = A[i];
  L[l].push(r);
  R[r].push(l);
}
for (let i = 0; i < N; i++) {
  L[i].sort((x, y) => x - y);
  R[i].sort((x, y) => x - y);
}

const INF = Number.MAX_SAFE_INTEGER;

const L_min_r = [];
for (let i = 0; i < N; i++) {
  L_min_r[i] = INF;
}
for (let i = 0; i < M; i++) {
  const [l, r] = A[i];
  L_min_r[l] = Math.min(L_min_r[l], r);
}
for (let i = N - 2; i >= 0; i--) {
  L_min_r[i] = Math.min(L_min_r[i], L_min_r[i + 1]);
}

const C = {};
for (let i = 0; i < M; i++) {
  const [l, r] = A[i];
  C[`${l}_${r}`] = (C[`${l}_${r}`] || 0) + 1;
}

for (let i = 0; i < Q; i++) {
  const [s, t] = B[i];

  if (C[`${s}_${t}`] >= 1) {
    // same
    if (C[`${s}_${t}`] >= 2) {
      console.log('Yes');
      continue;
    }
    if (L_min_r[s] <= t - 1) {
      console.log('Yes');
      continue;
    }
    if (L_min_r[s + 1] <= t) {
      console.log('Yes');
      continue;
    }
  } else {
    // diff
    const idx_r = lower_bound(L[s], t) - 1;
    const idx_l = lower_bound(R[t], s);
    if (idx_r >= 0 && idx_l < R[t].length) {
      if (R[t][idx_l] <= L[s][idx_r] + 1) {
        console.log('Yes');
        continue;
      }
    }
  }

  console.log('No');
}
