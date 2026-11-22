const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

let ans = 0n;

for (let L = 3n; L <= 20n; L += 1n) {
  for (let a = 1n; ; a += 1n) {
    {
      let x = N;
      for (let i = 0n; i < L; i += 1n) x /= a + i;
      if (x === 0n) break;
    }

    const f = (d) => {
      let x = N;
      for (let i = 0n; i < L; i += 1n) x /= a + i * d;
      return x > 0n;
    };

    let l = 1n;
    let r = BigInt(1e9);
    let m;
    while (r - l > 1n) {
      m = (l + r) / 2n;
      if (f(m)) {
        l = m;
      } else {
        r = m;
      }
    }
    ans += l;
  }
}

console.log(ans.toString());
