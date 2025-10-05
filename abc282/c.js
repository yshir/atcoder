const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1].split('');

let flag = false;
for (let i = 0; i < N; i++) {
  if (S[i] === '"') {
    flag = !flag;
  }
  if (S[i] === ',' && !flag) {
    S[i] = '.';
  }
}
console.log(S.join(''));
