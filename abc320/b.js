const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let ans = 0;
for (let i = 0; i < S.length; i++) {
  for (let j = i; j < S.length; j++) {
    const s1 = S.substring(i, j + 1);
    const s2 = [...s1].reverse().join('');
    if (s1 === s2) {
      ans = Math.max(ans, s1.length);
    }
  }
}
console.log(ans);
