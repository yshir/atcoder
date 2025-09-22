const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = [];
const B = [];
for (let i = 0; i < M; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  A[i] = x;
  B[i] = y;
}

const weak = new Set();
for (let i = 0; i < M; i++) {
  weak.add(B[i]);
}

const guess = [];
for (let i = 0; i < N; i++) {
  if (!weak.has(i + 1)) {
    guess.push(i + 1);
  }
}

console.log(guess.length === 1 ? guess[0] : -1);
