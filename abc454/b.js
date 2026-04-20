const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const F = input[1].split(' ').map(Number);

const seen = new Set();
for (let i = 0; i < N; i++) {
  seen.add(F[i]);
}

const f = () => {
  return seen.size === N ? 'Yes' : 'No';
};

const g = () => {
  return seen.size === M ? 'Yes' : 'No';
};

console.log([f(), g()].join('\n'));
