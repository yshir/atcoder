const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const test0 = () => {
  let ok = true;
  for (let i = 0; i < N; i++) {
    if (A[i] !== B[i]) ok = false;
  }
  return ok;
};

const test1 = () => {
  let i = 0;
  let j = 0;
  let v = null;
  while (i < N || j < N) {
    if (A[i] === B[j]) {
      i++;
      j++;
      continue;
    }

    if (v === null) {
      v = A[i];
      i++;
      continue;
    }

    if (v === B[j]) {
      v = -1;
      j++;
      continue;
    }

    return false;
  }
  return true;
};

const test2 = () => {
  let i = 0;
  let j = 0;
  let v = null;
  while (i < N || j < N) {
    if (A[i] === B[j]) {
      i++;
      j++;
      continue;
    }

    if (v === null) {
      v = B[j];
      j++;
      continue;
    }

    if (v === A[i]) {
      v = -1;
      i++;
      continue;
    }

    return false;
  }
  return true;
};

if (test0() || test1() || test2()) {
  console.log('Yes');
} else {
  console.log('No');
}
