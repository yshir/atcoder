const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

let T2 = S.slice(S.length - T.length);

let diff = 0;
for (let i = 0; i < T.length; i++) {
  if (T[i] !== '?' && T2[i] !== '?' && T[i] !== T2[i]) {
    diff++;
  }
}
console.log(diff === 0 ? 'Yes' : 'No');

for (let i = 0; i < T.length; i++) {
  if (T[i] !== '?' && T2[i] !== '?' && T[i] !== T2[i]) {
    diff--;
  }
  if (T[i] !== '?' && S[i] !== '?' && T[i] !== S[i]) {
    diff++;
  }
  console.log(diff === 0 ? 'Yes' : 'No');
}
