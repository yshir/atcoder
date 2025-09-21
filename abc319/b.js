const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const ans = [];

for (let i = 0; i <= N; i++) {
  let j;
  for (j = 1; j <= 9; j++) {
    if (N % j === 0) {
      const k = N / j;
      if (i % k === 0) {
        break;
      }
    }
  }
  if (j === 10) {
    ans.push('-');
  } else {
    ans.push(j);
  }
}

console.log(ans.join(''));
