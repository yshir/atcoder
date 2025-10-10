const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, R] = input[0].split(' ').map(Number);
const L = input[1].split(' ').map(Number);

let ll = R;
for (let i = 0; i <= R; i++) {
  if (L[i] === 0) {
    ll = i;
    break;
  }
}

let rr = R;
for (let i = N; i >= R; i--) {
  if (L[i - 1] === 0) {
    rr = i;
    break;
  }
}

let cnt = 0;
for (let i = ll; i < rr; i++) {
  if (L[i] === 0) {
    cnt += 1;
  } else {
    cnt += 2;
  }
}
console.log(cnt);
