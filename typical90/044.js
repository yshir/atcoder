const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let head = 0;
for (let i = 0; i < Q; i++) {
  let [t, x, y] = input[i + 2].split(' ').map(Number);
  x--;
  y--;

  if (t === 1) {
    const x2 = (x + head) % N;
    const y2 = (y + head) % N;
    [A[x2], A[y2]] = [A[y2], A[x2]];
  }
  if (t === 2) {
    head = (head - 1 + N) % N;
  }
  if (t === 3) {
    console.log(A[(head + x) % N]);
  }
}
