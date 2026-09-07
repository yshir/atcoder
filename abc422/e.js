const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const X = [];
const Y = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map(BigInt);
  X[i] = x;
  Y[i] = y;
}

let T = 100;
while (T--) {
  let i = Math.floor(Math.random() * N);
  let j = Math.floor(Math.random() * (N - 1));
  if (i === j) j++;

  const xi = X[i];
  const yi = Y[i];

  const xj = X[j];
  const yj = Y[j];

  const dx = xi - xj;
  const dy = yi - yj;

  const a = dy;
  const b = -dx;
  const c = -(a * xi + b * yi);

  let cnt = 0;
  for (let k = 0; k < N; k++) {
    const xk = X[k];
    const yk = Y[k];
    if (a * xk + b * yk + c === 0n) cnt++;
  }
  if (cnt >= Math.ceil(N / 2)) {
    console.log('Yes');
    console.log([a, b, c].join(' '));
    return;
  }
}

console.log('No');
