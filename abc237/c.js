const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let l = 0;
let r = S.length - 1;
let flag = true;

while (l < r) {
  if (S[l] === S[r]) {
    if (S[l] !== 'a') {
      flag = false;
    }
    l++;
    r--;
    continue;
  }

  if (S[r] === 'a' && flag) {
    r--;
    continue;
  }

  console.log('No');
  return;
}

console.log('Yes');
