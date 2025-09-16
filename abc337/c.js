const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {}; // k を指している人は v
for (let i = 0; i < N; i++) {
  map[A[i]] = i + 1;
}

const B = [map[-1]];
while (true) {
  const tail = B[B.length - 1];
  if (map[tail] === undefined) {
    break;
  }
  B.push(map[tail]);
}
console.log(B.join(' '));
