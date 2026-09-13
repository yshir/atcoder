const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [N, S, L] = input[0].split(' ').map(BigInt);
N = Number(N);
S = Number(S) - 1;
const A = input[1].split(' ').map(BigInt);

const B = [0n];
for (let i = 0; i < N - 1; i++) {
  B[i + 1] = B[i] + A[i];
}

let ans = 1;
for (let i = 0; i <= S; i++) {
  for (let j = S; j < N; j++) {
    const xl = B[S] - B[i];
    const xr = B[j] - B[S];
    if (2n * xl + xr <= L) ans = Math.max(ans, j - i + 1);
    if (2n * xr + xl <= L) ans = Math.max(ans, j - i + 1);
  }
}
console.log(ans);
