const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, D] = input[0].split(' ').map(Number);

const ans = [];
for (let i = A; i <= B; i += D) {
  ans.push(i);
}
console.log(ans.join(' '));
