const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const same = (A, B) => {
  let ok = true;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) ok = false;
  }
  return ok;
};

const shift_l = (A) => {
  const B = [];
  for (let i = 1; i < A.length; i++) {
    B.push(A[i]);
  }
  B.push(A[0]);
  return B;
};

if (same(A, B)) {
  console.log('Yes');
  return;
}

let L = 0;
while (A[L] === B[L] && L < N - 1) L++;
let R = N - 1;
while (A[R] === B[R] && R > 0) R--;

const C = [...A].slice(L, R + 1);
const D = [...B].slice(L, R + 1);

if (
  same(C, shift_l(D)) ||
  same(shift_l(C), D) //
) {
  console.log('Yes');
} else {
  console.log('No');
}
