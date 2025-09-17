const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = [i + 1, 0];
}
A.reverse();

const d = {
  U: [0, 1],
  D: [0, -1],
  R: [1, 0],
  L: [-1, 0],
};

for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ');
  if (query[0] === '1') {
    const C = query[1];
    const [dx, dy] = d[C];
    const [x, y] = A[A.length - 1];
    A.push([x + dx, y + dy]);
  }
  if (query[0] === '2') {
    const p = Number(query[1]);
    console.log(A[A.length - p].join(' '));
  }
}
