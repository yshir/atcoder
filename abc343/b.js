const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
for (let i = 0; i < N; i++) {
  console.log(
    input[i + 1]
      .split(' ')
      .map(Number)
      .map((x, i) => [x, i])
      .filter(([x]) => x === 1)
      .map(([, i]) => i + 1)
      .join(' '),
  );
}
