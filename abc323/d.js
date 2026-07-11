const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  let [s, c] = input[i + 1].split(' ').map(Number);
  c = BigInt(c);
  while (s % 2 === 0) {
    s /= 2;
    c *= 2n;
  }
  map[s] = (map[s] || 0n) + c;
}

const popcount = (a) => {
  let c = 0;
  while (a > 0) {
    c += a % 2n === 1n ? 1 : 0;
    a /= 2n;
  }
  return c;
};

let ans = 0;
for (const k in map) {
  ans += popcount(map[k]);
}
console.log(ans);
