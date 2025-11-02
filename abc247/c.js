const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const f = (a) => {
  if (a === 1) return [1];
  return [...f(a - 1), a, ...f(a - 1)];
};

console.log(f(N).join(' '));
