const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, X] = input[0].split(' ');
N = Number(N);

for (let i = 0; i < N; i++) {
  const S = input[i + 1];
  if (
    S[
      {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
      }[X]
    ] === 'o'
  ) {
    console.log('Yes');
    return;
  }
}

console.log('No');
