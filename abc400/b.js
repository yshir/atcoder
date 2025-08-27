const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const threshold = 10 ** 9;

let sum = 0;
for (let i = 0; i <= M; i++) {
  if (sum + N ** i > threshold) {
    console.log('inf');
    return;
  }
  sum += N ** i;
}
console.log(sum);
