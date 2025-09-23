const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const f = (X) => {
  return A.filter((n) => n <= X).length >= B.filter((n) => n >= X).length;
};

let l = -1;
let r = 10 ** 9 + 1;
let m;
while (r - l > 1) {
  m = Math.floor((l + r) / 2);
  if (f(m)) {
    r = m;
  } else {
    l = m;
  }
}
console.log(r);
