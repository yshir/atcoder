const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const prime_sieve = (x) => {
  const composite = new Uint8Array(x + 1);

  // even
  for (let i = 4; i <= x; i += 2) {
    composite[i] = 1;
  }
  // odd
  for (let i = 3; i * i <= x; i += 2) {
    if (!composite[i]) {
      for (let j = i * i; j <= x; j += i) {
        composite[j] = 1;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= x; i++) {
    if (!composite[i]) primes.push(i);
  }
  return primes;
};

let cnt = 0;
const primes = prime_sieve(10 ** 6);

// p^8
for (const p of primes) {
  if (BigInt(p) ** 8n > N) break;
  cnt++;
}

// p^2 * q^2
for (let i = 0; i < primes.length; i++) {
  for (let j = i + 1; j < primes.length; j++) {
    if (BigInt(primes[i]) ** 2n * BigInt(primes[j]) ** 2n > N) break;
    cnt++;
  }
}

console.log(cnt);
