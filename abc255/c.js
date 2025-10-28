const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [X, A, D, N] = input[0].split(' ').map(BigInt);

let L = A;
let R = A + D * (N - 1n);
if (D < 0n) {
  [L, R] = [R, L];
  D *= -1n;
}

if (L >= X) {
  console.log((L - X).toString());
  return;
}
if (R <= X) {
  console.log((X - R).toString());
  return;
}

X -= A;
X += D * 10n ** 19n;

const s = X - (X / D) * D; // X % D;
const t = D - s;
console.log((s < t ? s : t).toString());
