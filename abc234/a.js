const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [t] = input[0].split(' ').map(Number);

const f = (x) => {
  return x ** 2 + 2 * x + 3;
};

console.log(f(f(f(t) + t) + f(f(t))));
