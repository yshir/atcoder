const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = 0; i < N; i++) {
  const S = input[i + 1];
  if (S === 'For') {
    cnt++;
  }
}

console.log(Math.ceil(N / 2) <= cnt ? 'Yes' : 'No');
