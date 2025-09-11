const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c, d, e, f] = input[0].split(' ').map(Number);
const [g, h, i, j, k, l] = input[1].split(' ').map(Number);

const f_1d = (a, b, c, d) => {
  return !(b <= c || d <= a);
};

if (f_1d(a, d, g, j) && f_1d(b, e, h, k) && f_1d(c, f, i, l)) {
  console.log('Yes');
} else {
  console.log('No');
}
