const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(BigInt);

const sqrt = (num) => {
  const ret = (() => {
    if (num < 0n) throw new RangeError();
    if (num < 2n) return num;
    let x = num / 2n;
    while (true) {
      const y = (x + num / x) / 2n;
      if (y >= x) return x;
      x = y;
    }
  })();
  return ret ** 2n === num ? ret : ret + 1n;
};

const min = (a, b) => (a < b ? a : b);

const M2 = sqrt(M);
const INF = BigInt(1e12) * BigInt(1e12) + 1n;

let ans = INF;
const amax = min(M2, N);
for (let a = 1n; a <= amax; a += 1n) {
  // ab >= M --> b >= M/a --> min(b) = ceil(M/a)
  const b = (M + (a - 1n)) / a;
  if (b <= N) ans = min(ans, a * b);
}
console.log(ans === INF ? -1 : ans.toString());
