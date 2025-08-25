const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);

let x = BigInt(1);
for (let i = 0; i < N; i++) {
  x = x * A[i];
  if (x >= BigInt(10) ** BigInt(K)) {
    x = BigInt(1);
  }
}
console.log(x.toString());
