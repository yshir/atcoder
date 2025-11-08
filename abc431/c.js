let _pos = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, K] = input[_pos++].split(' ').map(Number);
const H = input[_pos++].split(' ').map(Number);
const B = input[_pos++].split(' ').map(Number);

H.sort((a, b) => a - b);
B.sort((a, b) => a - b);

let i = 0;
let j = 0;
let cnt = 0;
while (i < N && j < M) {
  if (H[i] <= B[j]) {
    cnt++;
    i++;
    j++;
    continue;
  }
  j++;
}

if (cnt >= K) {
  console.log('Yes');
} else {
  console.log('No');
}
