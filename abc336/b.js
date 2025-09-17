const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = 0; ; i++) {
  if (N >> i === 0) {
    break;
  }
  if (((N >> i) & 1) === 0) {
    cnt++;
  } else {
    break;
  }
}
console.log(cnt);
