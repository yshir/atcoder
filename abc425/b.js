const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const S = [];
for (let i = 1; i <= N; i++) S.push(i);

for (let i = 0; i < N; i++) {
  if (A[i] === -1) {
    continue;
  }
  if (!S.includes(A[i])) {
    console.log('No');
    return;
  }
  S.splice(S.indexOf(A[i]), 1);
}

const P = [];
for (let i = 0; i < N; i++) {
  if (A[i] !== -1) {
    P[i] = A[i];
  } else {
    P[i] = S.pop();
  }
}
console.log('Yes');
console.log(P.join(' '));
