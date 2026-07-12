const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const L = input[1].split(' ').map(BigInt);

const f = (W) => {
  let cur_m = 1;
  let cur_w = 0n;

  for (let i = 0; i < N; i++) {
    if (L[i] > W) return false;

    if (cur_w + L[i] <= W) {
      cur_w += L[i] + 1n;
    } else {
      cur_w = L[i] + 1n;
      cur_m++;
    }
  }

  return cur_m <= M;
};

let l = 0n;
let r = BigInt(1e9 + 1) * BigInt(2 * 1e5) + 10n;
let m;

while (r - l > 1) {
  m = (l + r) / 2n;
  if (f(m)) {
    r = m;
  } else {
    l = m;
  }
}

console.log(r.toString());
