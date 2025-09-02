const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [L, R] = input[0].split(' ').map(BigInt);

const f = (x) => {
  x += 1n;

  const digits = [...String(x)].map(BigInt);
  const n = BigInt(digits.length);

  let cnt = 0n;

  // N-1 桁以下の処理
  for (let i = 1n; i < n; i++) {
    for (let j = 1n; j <= 9n; j++) {
      cnt += j ** (i - 1n);
    }
  }

  // N 桁の処理
  for (let i = 1n; i < digits[0]; i++) {
    cnt += i ** (n - 1n);
  }
  for (let i = 1n; i < n; i++) {
    if (digits[0] > digits[i]) {
      cnt += digits[i] * digits[0] ** (n - i - 1n);
    } else {
      cnt += digits[0] ** (n - i);
      break;
    }
  }

  return cnt;
};

console.log((f(R) - f(L - 1n)).toString());
