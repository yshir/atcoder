const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1].split(' ');
const T = input[2].split(' ');

const set = new Set();
for (let i = 0; i < T.length; i++) {
  set.add(T[i]);
}

for (let i = 0; i < S.length; i++) {
  if (set.has(S[i])) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
