const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const A = [];
let now;

now = S;
for (let i = 1; i <= S.length; i++) {
  now = now.slice(1) + now[0];
  A.push(now);
}

now = S;
for (let i = 1; i <= S.length; i++) {
  now = now[now.length - 1] + now.slice(0, -1);
  A.push(now);
}

A.sort();
console.log(A[0]);
console.log(A[A.length - 1]);
