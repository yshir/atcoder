const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const P = [];
for (let i = 0; i < N; i++) {
  const [C] = input[i * 2 + 1].split(' ').map(Number);
  const A = input[i * 2 + 2].split(' ').map(Number);
  P[i] = { i, C, A };
}

const [X] = input[1 + 2 * N].split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  if (P[i].A.includes(X)) {
    if (min > P[i].C) {
      min = P[i].C;
    }
  }
}
const ans = [];
for (let i = 0; i < N; i++) {
  if (P[i].A.includes(X)) {
    if (min === P[i].C) {
      ans.push(P[i]);
    }
  }
}
ans.sort((a, b) => a.i - b.i);
console.log(ans.length);
console.log(ans.map((x) => x.i + 1).join(' '));
