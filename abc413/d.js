const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N] = input[i * 2 + 1].split(' ').map(Number);
  const A = input[i * 2 + 2].split(' ').map(Number);
  A.sort((x, y) => Math.abs(x) - Math.abs(y));

  let ok = true;
  for (let j = 0; j < N - 2; j++) {
    if (BigInt(A[j + 0]) * BigInt(A[j + 2]) !== BigInt(A[j + 1]) * BigInt(A[j + 1])) {
      ok = false;
      break;
    }
  }

  if (Math.abs(A[0]) === Math.abs(A[N - 1])) {
    let pos = 0;
    let neg = 0;
    for (let j = 0; j < N; j++) {
      if (A[j] > 0) {
        pos++;
      } else {
        neg++;
      }
    }
    if (Math.abs(pos - neg) <= 1) {
      ok = true;
    }
  }

  console.log(ok ? 'Yes' : 'No');
}
