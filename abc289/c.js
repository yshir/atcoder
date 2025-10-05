const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const C = [];
for (let i = 0; i < M; i++) {
  C[i] = input[i * 2 + 2].split(' ').map(Number);
}

let cnt = 0;
for (let i = 1; i <= 1 << M; i++) {
  const set = new Set();
  for (let j = 0; j < M; j++) {
    if (((i >> j) & 1) === 1) {
      for (let k = 0; k < C[j].length; k++) {
        set.add(C[j][k]);
      }
    }
  }

  let ok = true;
  for (let j = 1; j <= N; j++) {
    if (!set.has(j)) {
      ok = false;
      break;
    }
  }
  if (ok) cnt++;
}
console.log(cnt);
