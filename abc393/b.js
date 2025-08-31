const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let cnt = 0;
for (let i = 0; i < S.length; i++) {
  for (let j = i + 1; j < S.length; j++) {
    for (let k = j + 1; k < S.length; k++) {
      if (S[i] === 'A' && S[j] === 'B' && S[k] === 'C' && j - i === k - j) {
        cnt++;
      }
    }
  }
}
console.log(cnt);
