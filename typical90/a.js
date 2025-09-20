const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, L] = input[0].split(' ').map(Number);
const [K] = input[1].split(' ').map(Number);
const A = input[2].split(' ').map(Number);

const f = (x) => {
  let cnt = 0;
  let last = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] - last >= x) {
      last = A[i];
      cnt++;
      if (cnt === K) {
        return L - last >= x;
      }
    }
  }
  return false;
};

let l = 0;
let r = 10 ** 9;
let m;
while (r - l > 1) {
  m = Math.floor((l + r) / 2);
  if (f(m)) {
    l = m;
  } else {
    r = m;
  }
}
console.log(l);
