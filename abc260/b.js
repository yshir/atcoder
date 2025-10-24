const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X, Y, Z] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const S = [];
for (let i = 0; i < N; i++) {
  S[i] = { i, a: A[i], b: B[i], used: 0 };
}

let d;

S.sort((a, b) => (a.a === b.a ? a.i - b.i : b.a - a.a));
d = 0;
for (let i = 0; i < X; i++) {
  while (S[i + d].used) {
    d++;
  }
  S[i + d].used = 1;
}

S.sort((a, b) => (a.b === b.b ? a.i - b.i : b.b - a.b));
d = 0;
for (let i = 0; i < Y; i++) {
  while (S[i + d].used) {
    d++;
  }
  S[i + d].used = 1;
}

S.sort((a, b) => (a.a + a.b === b.a + b.b ? a.i - b.i : b.a + b.b - (a.a + a.b)));
d = 0;
for (let i = 0; i < Z; i++) {
  while (S[i + d].used) {
    d++;
  }
  S[i + d].used = 1;
}

S.sort((a, b) => a.i - b.i);

const ans = [];
for (let i = 0; i < N; i++) {
  if (S[i].used) console.log(i + 1);
}
