const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N] = input[i * 2 + 1].split(' ').map(Number);
  const S = input[i * 2 + 2];

  let l, r;
  for (let j = 0; j < N - 1; j++) {
    if (S.charCodeAt(j) > S.charCodeAt(j + 1)) {
      l = j;
      break;
    }
  }
  if (l === undefined) {
    console.log(S);
    continue;
  }

  for (let k = l; k < N; k++) {
    if (S.charCodeAt(l) < S.charCodeAt(k)) {
      r = k - 1;
      break;
    }
  }
  if (r === undefined) {
    r = N - 1;
  }

  const t = [...S];
  t.splice(r + 1, 0, S[l]);
  t.splice(l, 1);
  console.log(t.join(''));
}
