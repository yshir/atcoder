const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A, B] = input[0].split(' ').map(Number);
const D = input[1].split(' ').map(Number);

const set = new Set();
for (let i = 0; i < N; i++) {
  set.add(D[i] % (A + B));
}

const E = [...set];
E.sort((a, b) => a - b);

const size = E.length;
for (let i = 0; i < size; i++) {
  E.push(E[i] + A + B);
}

for (let i = 0; i < size; i++) {
  if (E[i + size - 1] - E[i] + 1 <= A) {
    console.log('Yes');
    return;
  }
}
console.log('No');
