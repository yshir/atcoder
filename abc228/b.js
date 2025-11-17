const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const set = new Set();

let now = X;
while (1) {
  if (set.has(now)) {
    break;
  }

  set.add(now);
  now = A[now - 1];
}

console.log(set.size);
