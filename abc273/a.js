const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const f = (n) => {
  if (n === 0) return 1;
  return f(n - 1) * n;
};

console.log(f(N));
