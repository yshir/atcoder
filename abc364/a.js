const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let k = 0;
for (let i = 0; i < N; i++) {
  if (k === 2) {
    console.log('No');
    return;
  }

  const S = input[i + 1];
  if (S === 'sweet') {
    k++;
  } else {
    k = 0;
  }
}
console.log('Yes');
