const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const primes = (n) => {
  const composites = new Uint8Array((n + 1) >> 3);
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (!((composites[i >> 3] >> (i & 7)) & 1)) {
      primes.push(i);
      for (let j = i * i; j <= n; j += i) {
        composites[j >> 3] |= 1 << (j & 7);
      }
    }
  }
  return primes;
};

const p_list = primes(N);
console.log({ p_list });
let cnt = 0;

// p^8
for (const p of p_list) {
  if (p ** 8 >= N) break;
  cnt++;
}

// p_1^2 * p_2^2
for (let i = 0; i < p_list.length; i++) {
  for (let j = i + 1; j < p_list.length; j++) {
    if (p_list[i] ** 2 * p_list[j] ** 2 >= N) break;
    cnt++;
  }
}

console.log(cnt);
