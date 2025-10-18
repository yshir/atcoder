const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const b = [];
for (let i = 0; N >> BigInt(i) > 0; i++) {
  if (((N >> BigInt(i)) & 1n) === 1n) {
    b.push(i);
  }
}

for (let i = 0; i < 1 << b.length; i++) {
  let n = 0n;
  for (let j = 0; j < b.length; j++) {
    if (((i >> j) & 1) === 1) {
      n += 1n << BigInt(b[j]);
    }
  }
  console.log(n.toString());
}
