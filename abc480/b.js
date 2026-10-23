let line = 0;
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[line++].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[line++];
}

const A = new Uint32Array(N);

for (let j = 0; j < M; j++) {
  const t = input[line++];

  let a = false;
  for (let i = 0; i < N; i++) {
    if (S[i] === t) {
      A[i]++;
      a = true;
    }
  }
  if (a) continue;

  const candidate = [];
  for (let i = 0; i < N; i++) {
    if (S[i].length !== t.length) continue;

    let cnt = 0;
    for (let k = 0; k < S[i].length; k++) {
      if (S[i][k] !== t[k]) cnt++;
    }
    if (cnt === 1) candidate.push(i);
  }
  if (candidate.length === 1) A[candidate[0]]++;
}

console.log(A.join('\n'));
