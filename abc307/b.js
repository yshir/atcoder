const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];

for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const s1 = S[i] + S[j];
    if (s1 === [...s1].reverse().join('')) {
      console.log('Yes');
      return;
    }

    const s2 = S[j] + S[i];
    if (s2 === [...s2].reverse().join('')) {
      console.log('Yes');
      return;
    }
  }
}

console.log('No');
