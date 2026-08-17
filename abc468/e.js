const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const MOD = 998244353;

// mod_arith.js
// Primitive modular arithmetic over a prime modulus (MOD < 2^34).
// Pure stateless functions; results stay within Number safe integer range.

/**
 * Computes (a * b) mod MOD using a 15-bit split to keep all intermediate
 * products within Number.MAX_SAFE_INTEGER (2^53). Required when MOD ≥ 2^26,
 * since a naive a * b would overflow Number precision.
 *
 * @param {number} a - Operand in [0, MOD).
 * @param {number} b - Operand in [0, MOD).
 * @param {number} MOD - Modulus, must be < 2^34.
 * @returns {number} (a * b) mod MOD, in [0, MOD).
 */
const mulMod = (a, b) => {
  const ah = Math.floor(a / 32768);
  const al = a % 32768;
  return (((ah * b) % MOD) * 32768 + al * b) % MOD;
};

/**
 * Computes (a + b) mod MOD. Both operands must be in [0, MOD) so the
 * intermediate sum stays below 2 * MOD < 2^35 (well within safe range).
 *
 * @param {number} a - Operand in [0, MOD).
 * @param {number} b - Operand in [0, MOD).
 * @param {number} MOD - Modulus.
 * @returns {number} (a + b) mod MOD, in [0, MOD).
 */
const addMod = (a, b) => (a + b) % MOD;

/**
 * Computes (a - b) mod MOD, normalizing into [0, MOD) even when a < b.
 *
 * @param {number} a - Operand in [0, MOD).
 * @param {number} b - Operand in [0, MOD).
 * @param {number} MOD - Modulus.
 * @returns {number} (a - b) mod MOD, in [0, MOD).
 */
const subMod = (a, b) => (((a - b) % MOD) + MOD) % MOD;

/**
 * Computes (base ^ exp) mod MOD by binary exponentiation. Runs in O(log exp)
 * multiplications. Handles negative or out-of-range `base` by reducing it
 * into [0, MOD) up front.
 *
 * @param {number} base - Base of the exponentiation.
 * @param {number} exp - Non-negative integer exponent.
 * @param {number} MOD - Modulus, must be < 2^34.
 * @returns {number} (base ^ exp) mod MOD, in [0, MOD).
 */
const powMod = (base, exp) => {
  let r = 1;
  base = ((base % MOD) + MOD) % MOD;
  while (exp > 0) {
    if (exp & 1) r = mulMod(r, base, MOD);
    base = mulMod(base, base, MOD);
    exp = Math.floor(exp / 2);
  }
  return r;
};

/**
 * Computes the modular inverse of `a` under MOD via the extended Euclidean
 * algorithm. Solves a*x + MOD*y = gcd(a, MOD) = 1 for x, then returns x mod
 * MOD. Requires gcd(a, MOD) = 1; MOD need not be prime.
 *
 * @param {number} a - Value to invert. Any integer; will be reduced mod MOD.
 * @param {number} MOD - Modulus. Must satisfy gcd(a, MOD) = 1.
 * @returns {number} The modular inverse of a, in [1, MOD).
 */
const invMod = (a) => {
  a = ((a % MOD) + MOD) % MOD;
  let x = 1,
    y = 0,
    r = MOD,
    q;
  while (r) {
    q = (r / a) | 0;
    [r, a] = [a, r - q * a];
    [y, x] = [x, y - q * x];
  }
  return x < 0 ? x + MOD : x;
};

/**
 * Computes (a / b) mod MOD as a * b^(-1) mod MOD. Requires MOD to be prime
 * and gcd(b, MOD) = 1.
 *
 * @param {number} a - Operand in [0, MOD).
 * @param {number} b - Divisor in [1, MOD).
 * @param {number} MOD - Modulus, must be prime.
 * @returns {number} (a / b) mod MOD, in [0, MOD).
 */
const divMod = (a, b, MOD) => mulMod(a, invMod(b, MOD), MOD);

const H = [];
const W = [];

for (let i = 0; i < N; i++) {
  H[i] = addMod(invMod(i + 1), H[i - 1] || 0);
  W[i] = addMod(A[i], W[i - 1] || 0);
}

let ans = 0;
for (let l = 0; l < Math.ceil(N / 2); l++) {
  const r = N - 1 - l;
  ans = addMod(
    ans,
    mulMod(
      subMod(H[r], H[l - 1] || 0),
      subMod(W[r], W[l - 1] || 0), //
    ),
  );
}
console.log(ans);
