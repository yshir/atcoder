const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0].split('');
const T = [...'atcoder'];
const N = S.length;

let ans = 0;

for (let i = 0; i < N; i++) {
  if (S[i] === T[i]) continue;

  let j = i + 1;
  while (S[j] !== T[i]) j++;
  while (i !== j) {
    [S[j - 1], S[j]] = [S[j], S[j - 1]];
    j--;
    ans++;
  }
}

console.log(ans);
