const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const ans = [];
for (let i = 1; i <= N; i++) {
  if (i % 3 === 0) {
    ans.push('x');
  } else {
    ans.push('o');
  }
}
console.log(ans.join(''));
