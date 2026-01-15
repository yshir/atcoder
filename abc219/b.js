const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = [input[0], input[1], input[2]];
const T = input[3].split('').map(Number);

const ans = [];
for (let i = 0; i < T.length; i++) {
  ans.push(S[T[i] - 1]);
}
console.log(ans.join(''));
