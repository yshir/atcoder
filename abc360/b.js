const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S, T] = input[0].split(' ');

for (let n = 1; n < S.length; n++) {
  for (let j = 0; j < n; j++) {
    let str = '';
    for (let i = j; i < S.length; i += n) {
      str += S[i];
    }
    if (str === T) {
      console.log('Yes');
      return;
    }
  }
}

console.log('No');
