const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const A = Array(N).fill(1);

let t = 0;
for (let i = 0; i < Q; i++) {
  let [x, y] = input[i + 1].split(' ').map(Number);
  x--;
  y--;

  if (t <= x) {
    let sum = 0;
    for (let j = t; j <= x; j++) {
      sum += A[j];
      // A[j] = 0;
    }
    console.log(sum);
    A[y] += sum;
    t = x + 1;
  } else {
    console.log(0);
  }
}
