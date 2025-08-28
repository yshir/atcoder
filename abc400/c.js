const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const isqrt = (num) => {
  if (num < 0n) throw new RangeError();
  if (num < 2n) return num;
  let x = num / 2n;
  while (true) {
    const y = (x + num / x) / 2n;
    if (y >= x) return x;
    x = y;
  }
};

let sum = 0n;
for (let a = 1n; a < 60n; a++) {
  sum += (isqrt(N / 2n ** a) + 1n) / 2n;
}
console.log(sum.toString());
