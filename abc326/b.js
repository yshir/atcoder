const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

for (let i = N; ; i++) {
  const [a, b, c] = String(i).split('').map(Number);
  if (a * b === c) {
    console.log(i);
    return;
  }
}
