const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [D] = input[0].split(' ').map(BigInt);

const abs = (x) => {
  return x >= 0 ? x : -x;
};

const min = (x, y) => {
  return x > y ? y : x;
};

const max = 2n * 10n ** 6n;
let y = max;
let ans = BigInt(Number.MAX_VALUE);
for (let x = 0n; x <= max; x++) {
  while (y > 0 && x ** 2n + y ** 2n - D >= 0) {
    y--;
  }
  ans = min(ans, abs(x ** 2n + (y + 0n) ** 2n - D));
  ans = min(ans, abs(x ** 2n + (y + 1n) ** 2n - D));
}

console.log(ans.toString());
