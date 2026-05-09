const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, K] = input[0].split(' ');
N = Number(N);
K = BigInt(K);
const A = input[1].split(' ').map(BigInt);

const f = (target) => {
  let remain_k = K;
  for (let i = 0; i < N; i++) {
    if (target <= A[i]) {
      continue;
    }

    const a = target - A[i];
    const b = BigInt(i + 1);
    const c = (a + b - 1n) / b; // ceil(a / b) = floor(a + (b-1) / b)

    remain_k -= c;
    if (remain_k < 0n) return false;
  }

  return remain_k >= 0n;
};

let l = 0n;
let r = 10n ** 50n;
// let r = 100n;
let m;
while (l <= r) {
  m = (l + r) / 2n;
  // console.log({ l, r, m });
  if (!f(m)) {
    r = m - 1n;
  } else {
    l = m + 1n;
  }
}
console.log(r.toString());
// console.log({ l, r, m });
