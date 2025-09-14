const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const X = [];
for (let i = 0; i < N; i++) {
  X.push(A[i]);

  while (true) {
    if (X.length <= 1) {
      break;
    }
    if (X[X.length - 1] !== X[X.length - 2]) {
      break;
    }
    const x = X.pop();
    X.pop();
    X.push(x + 1);
  }
}
console.log(X.length);
