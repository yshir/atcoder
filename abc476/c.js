const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let B = [];
for (let i = 0; i < 2; i++) {
  B[i] = A[i];
}
B.sort((x, y) => y - x);

for (let k = 2; k < N; k++) {
  B.push(A[k]);
  B.sort((x, y) => y - x);
  B = B.slice(0, 3);
  console.log(B[2]);
}
