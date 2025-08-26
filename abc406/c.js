const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

const X = [];
let climbing = false;
for (let i = 0; i < N - 1; i++) {
  if (P[i + 1] > P[i]) {
    if (!climbing) {
      climbing = true;
      X.push(1);
    } else {
      X[X.length - 1]++;
    }
  } else {
    climbing = false;
  }
}

let sum = 0;
for (let i = 0; i < X.length - 1; i++) {
  sum += X[i] * X[i + 1];
}
console.log(sum);
