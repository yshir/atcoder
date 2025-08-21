const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let ans = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === 't') {
    for (let j = i + 2; j < S.length; j++) {
      if (S[j] === 't') {
        let cnt = 0;
        for (let k = i; k <= j; k++) {
          if (S[k] === 't') cnt++;
        }
        const t = (cnt - 2) / (j - i + 1 - 2);
        ans = Math.max(ans, t);
      }
    }
  }
}
console.log(ans);
