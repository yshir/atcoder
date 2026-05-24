const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const X = [];
for (let i = 0; i <= 3e5; i++) {
  X[i] = 0;
}

const Y = [];
for (let i = 0; i <= 6e5; i++) {
  Y[i] = 0;
}

let B = 0;
for (let i = 0; i < Q; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);

  if (a === 1) {
    X[b]++;
    Y[X[b]]++;
    if (Y[X[b]] === N) {
      B++;
    }
  }
  if (a === 2) {
    console.log(Y[b + B]);
  }
}
