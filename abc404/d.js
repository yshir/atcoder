const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const C = input[1].split(' ').map(Number);
const A = [];
for (let i = 0; i < M; i++) {
  const [, ...a] = input[i + 2].split(' ').map(Number);
  A[i] = new Set(a.map((x) => x - 1));
}

let ans = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 3 ** 10; i++) {
  let _i = i;
  let cost = 0;
  const zoo = [];
  for (let j = 0; j < N; j++) zoo[j] = 0;
  for (let j = 0; j < N; j++) {
    if (_i % 3 === 1) {
      cost += C[j];
      zoo[j]++;
    }
    if (_i % 3 === 2) {
      cost += C[j] * 2;
      zoo[j] += 2;
    }
    _i = Math.floor(_i / 3);
  }

  let ok = true;
  for (let j = 0; j < M; j++) {
    let cnt = 0;
    for (let k = 0; k < N; k++) {
      if (A[j].has(k)) {
        cnt += zoo[k];
      }
    }
    if (cnt < 2) {
      ok = false;
      break;
    }
  }
  if (ok) {
    ans = Math.min(ans, cost);
  }
}

console.log(ans);
