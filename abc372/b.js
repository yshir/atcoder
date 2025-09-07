const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [M] = input[0].split(' ').map(Number);

const A = [];
let n = M;
for (let i = 0; i < 20; i++) {
  for (let j = 10; j >= 0; j--) {
    if (3 ** j <= n) {
      A.push(j);
      n -= 3 ** j;
      break;
    }
  }
  if (n === 0) {
    break;
  }
}
console.log(A.length);
console.log(A.join(' '));
