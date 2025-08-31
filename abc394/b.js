const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = {
    value: input[i + 1],
    size: input[i + 1].length,
  };
}

console.log(
  A.sort((a, b) => a.size - b.size)
    .map((x) => x.value)
    .join('')
);
