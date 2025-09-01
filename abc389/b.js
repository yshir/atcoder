const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X] = input[0].split(' ').map(BigInt);

let sum = 1n;
for (let i = 1n; ; i++) {
  sum *= i;
  if (sum === X) {
    console.log(i.toString());
    return;
  }
}
