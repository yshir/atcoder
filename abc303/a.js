const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];
const T = input[2];

for (let i = 0; i < N; i++) {
  if (
    !(
      S[i] === T[i] || //
      (S[i] === '1' && T[i] === 'l') || //
      (S[i] === 'l' && T[i] === '1') || //
      (S[i] === '0' && T[i] === 'o') || //
      (S[i] === 'o' && T[i] === '0')
    )
  ) {
    console.log('No');
    return;
  }
}
console.log('Yes');
