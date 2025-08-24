const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const D = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  const ans = [];
  let sum = 0;
  for (let j = i + 1; j < N; j++) {
    sum += D[j - 1];
    ans.push(sum);
  }
  console.log(ans.join(' '));
}
