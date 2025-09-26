const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const f = (a, i) => {
  return Math.floor(a / 10 ** i) * 10 ** i;
};

if (N < 10 ** 3) {
  console.log(N);
} else if (N < 10 ** 4) {
  console.log(f(N, 1));
} else if (N < 10 ** 5) {
  console.log(f(N, 2));
} else if (N < 10 ** 6) {
  console.log(f(N, 3));
} else if (N < 10 ** 7) {
  console.log(f(N, 4));
} else if (N < 10 ** 8) {
  console.log(f(N, 5));
} else if (N < 10 ** 9) {
  console.log(f(N, 6));
}
