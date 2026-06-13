const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  let [a, b, x, y] = input[i + 1].split(' ').map(Number);
  x = Math.abs(x);
  y = Math.abs(y);
  const ab_min = Math.min(a, b);
  const ab_max = Math.max(a, b);

  let ans = 0n;

  const d = Math.min(x, y);
  [x, y] = [x - d, y - d];
  ans += BigInt(d) * BigInt(ab_min) * 2n;

  const z = Math.max(x, y);
  if (z > 0) {
    if (ab_min * 3 > ab_max) {
      const even = Math.floor(z / 2);
      const odd = z - even;
      ans +=
        x > 0 ? BigInt(odd) * BigInt(a) + BigInt(even) * BigInt(b) : BigInt(odd) * BigInt(b) + BigInt(even) * BigInt(a);
    } else {
      if (z % 2 === 0) {
        ans += BigInt(z) * 2n * BigInt(ab_min);
      } else if ((y > 0 && a > b) || (x > 0 && a < b)) {
        ans += (BigInt(z) * 2n - 1n) * BigInt(ab_min);
      } else {
        ans += (BigInt(z) * 2n + 1n) * BigInt(ab_min);
      }
    }
  }

  console.log(ans.toString());
}
