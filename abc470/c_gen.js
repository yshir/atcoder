const N = 5 * 1e5;
const Q1 = 2 * 1e5;
const Q2 = 2 * 1e5;
const Q = Q1 + Q2;

console.log([N, Q].join(' '));
for (let i = 0; i < Q1; i++) {
  console.log([1, 1].join(' '));
}
for (let i = 0; i < Q2; i++) {
  console.log([2].join(' '));
}
