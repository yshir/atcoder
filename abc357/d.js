const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const MOD = 998244353n;

/**
 * Computes (a * b) mod MOD. Both operands must be in [0n, MOD).
 *
 * @param {bigint} a - Operand in [0n, MOD).
 * @param {bigint} b - Operand in [0n, MOD).
 * @param {bigint} MOD - Modulus.
 * @returns {bigint} (a * b) mod MOD, in [0n, MOD).
 */
const mulMod = (a, b, MOD) => (a * b) % MOD;

/**
 * Computes (base ^ exp) mod MOD by binary exponentiation. Runs in O(log exp)
 * multiplications. Handles negative or out-of-range `base` by reducing it
 * into [0n, MOD) up front.
 *
 * @param {bigint} base - Base of the exponentiation.
 * @param {bigint} exp - Non-negative integer exponent.
 * @param {bigint} MOD - Modulus.
 * @returns {bigint} (base ^ exp) mod MOD, in [0n, MOD).
 */
const powMod = (base, exp, MOD) => {
  let r = 1n;
  base = ((base % MOD) + MOD) % MOD;
  while (exp > 0n) {
    if (exp & 1n) r = mulMod(r, base, MOD);
    base = mulMod(base, base, MOD);
    exp >>= 1n;
  }
  return r;
};

/**
 * Computes the modular inverse of `a` under MOD via Fermat's little theorem:
 * a^(-1) ≡ a^(MOD-2) (mod MOD). Requires MOD to be prime and gcd(a, MOD) = 1.
 *
 * @param {bigint} a - Value to invert, in [1n, MOD).
 * @param {bigint} MOD - Modulus, must be prime.
 * @returns {bigint} The modular inverse of a, in [1n, MOD).
 */
const invMod = (a, MOD) => powMod(a, MOD - 2n, MOD);

const divMod = (a, b, MOD) => mulMod(a, invMod(b, MOD), MOD);

const r = powMod(10n, BigInt(String(N).length), MOD);

console.log(mulMod(divMod(powMod(r, N, MOD) - 1n, r - 1n, MOD), N, MOD).toString());
