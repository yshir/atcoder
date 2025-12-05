const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1].split(' ').map(Number);
}

let li = 0;
let ri = N - 1;
let lx = 0;
let rx = 0;
while (li < ri) {
  const [la, lb] = S[li];
  const [ra, rb] = S[ri];
  const lt = (la - lx) / lb;
  const rt = (ra - rx) / rb;
  if (lt < rt) {
    li++;
    lx = 0;
    rx += lt * rb;
  } else {
    ri--;
    rx = 0;
    lx += rt * lb;
  }
}

let ans = lx + (S[li][0] - lx - rx) / 2;
for (let i = 0; i < li; i++) {
  ans += S[i][0];
}

console.log(ans);
