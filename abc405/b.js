const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for (let i = 0; i <= N; i++) {
  const B = A.slice(0, N - i);
  let ok = true;
  for (let j = 1; j <= M; j++) {
    if (!B.includes(j)) {
      ok = false;
      break;
    }
  }
  if (!ok) {
    console.log(i);
    break;
  }
}
