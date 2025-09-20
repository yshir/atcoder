const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const f = (x, y) => {
  return 2n ** x * 3n ** y;
};

for (let x = 0n; x <= 100n; x++) {
  for (let y = 0n; y <= 100n; y++) {
    if (f(x, y) === N) {
      console.log('Yes');
      return;
    }
  }
}
console.log('No');
