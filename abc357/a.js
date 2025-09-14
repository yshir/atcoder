const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);

let cnt = 0;
let remain = M;
for (let i = 0; i < N; i++) {
  remain = remain - H[i];
  if (remain >= 0) {
    cnt++;
  }
}
console.log(cnt);
