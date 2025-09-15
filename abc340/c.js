const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const f = (n) => {
  const seen = {};
  const _f = (n) => {
    if (seen[n] !== undefined) {
      return seen[n];
    }

    let ans;
    if (n === 1n) {
      ans = 0n;
    } else if (n % 2n === 0n) {
      ans = n + _f(n / 2n) + _f(n / 2n);
    } else {
      ans = n + _f(n / 2n) + _f(n / 2n + 1n);
    }
    seen[n] = ans;
    return ans;
  };
  return _f(n);
};

console.log(f(N).toString());
