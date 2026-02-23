let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[line++].split(' ').map(Number);

const seen = new Set();

for (let i = 0; i < N; i++) {
  const [L] = input[line++].split(' ').map(Number);
  const X = input[line++].split(' ').map(Number);

  let ok = false;
  for (let j = 0; j < L; j++) {
    if (!seen.has(X[j])) {
      seen.add(X[j]);
      console.log(X[j]);
      ok = true;
      break;
    }
  }
  if (!ok) console.log('0');
}
