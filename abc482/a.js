const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const S = input[0];

let cnt = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'o') cnt++;
}

console.log(cnt % 2 === 1 ? 'odd' : 'even');
