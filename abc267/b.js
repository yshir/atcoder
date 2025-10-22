const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (S[0] === '1') {
  console.log('No');
  return;
}

const cols = [];
cols.push(S[6] === '1');
cols.push(S[3] === '1');
cols.push(S[1] === '1' || S[7] === '1');
cols.push(S[0] === '1' || S[4] === '1');
cols.push(S[2] === '1' || S[8] === '1');
cols.push(S[5] === '1');
cols.push(S[9] === '1');

let l = cols.length;
for (let i = 0; i < cols.length; i++) {
  if (cols[i]) {
    l = i;
    break;
  }
}

let r = -1;
for (let i = cols.length - 1; i >= 0; i--) {
  if (cols[i]) {
    r = i;
    break;
  }
}

for (let i = l + 1; i < r; i++) {
  if (!cols[i]) {
    console.log('Yes');
    return;
  }
}
console.log('No');
