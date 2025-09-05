const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

if (N % 2 === 1) {
  let s = '';
  for (let i = 0; i < (N + 1) / 2 - 1; i++) {
    s += '1';
  }
  s += '/';
  for (let i = 0; i < (N + 1) / 2 - 1; i++) {
    s += '2';
  }
  if (s === S) {
    console.log('Yes');
    return;
  }
}

console.log('No');
