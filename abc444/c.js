const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

A.sort((a, b) => b - a);

// 折れてない
const check_a = () => {
  const L = A[0];
  let l = 0;
  let r = A.length - 1;
  while (l <= r) {
    if (A[l] === L) {
      l++;
      continue;
    }
    if (l !== r && A[l] + A[r] === L) {
      l++;
      r--;
      continue;
    }
    return [];
  }
  return [L];
};

// 折れてる
const check_b = () => {
  const L = A[0] + A[A.length - 1];
  let l = 0;
  let r = A.length - 1;
  while (l <= r) {
    if (l !== r && A[l] + A[r] === L) {
      l++;
      r--;
      continue;
    }
    return [];
  }
  return [L];
};

console.log([...check_a(), ...check_b()].join(' '));
