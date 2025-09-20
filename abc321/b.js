const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for (let i = 0; i <= 100; i++) {
  const B = [...A, i];
  B.sort((a, b) => a - b);
  let sum = 0;
  for (let j = 1; j < B.length - 1; j++) {
    sum += B[j];
  }
  if (sum >= X) {
    console.log(i);
    return;
  }
}
console.log(-1);
