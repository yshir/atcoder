const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1];

let s1, s2, s3, s4;

let cnt = 0;
let i = 0;
while (i < S.length) {
  if (S[i] === '1') {
    cnt++;
    if (cnt === K - 1) {
      s1 = i;
    }
    if (cnt === K) {
      s3 = i;
    }
    while (i < S.length) {
      if (S[i] === '0') {
        break;
      }
      i++;
    }
    if (cnt === K - 1) {
      s2 = i - 1;
    }
    if (cnt === K) {
      s4 = i - 1;
      break;
    }
  }
  i++;
}

const T = [...S];
for (let i = s2 + 1; i <= s4; i++) {
  if (i < s2 + 1 + s4 - s3 + 1) {
    T[i] = '1';
  } else {
    T[i] = '0';
  }
}
console.log(T.join(''));
