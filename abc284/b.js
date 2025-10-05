const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N] = input[i * 2 + 1].split(' ').map(Number);
  const A = input[i * 2 + 2].split(' ').map(Number);

  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (A[j] % 2 === 1) cnt++;
  }
  console.log(cnt);
}
