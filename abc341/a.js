const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let ans = '1';

for (let i = 0; i < N; i++) {
  ans += '01';
}

console.log(ans);
