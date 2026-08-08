const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const M = 1e9 + 7;

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

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
const mulMod = (a, b, MOD) => {
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
const addMod = (a, b, MOD) => (a + b) % MOD;

let ans = 1;
for (let i = 0; i < N; i++) {
  let cur = 0;
  for (let j = 0; j < 6; j++) {
    cur = addMod(cur, A[i][j], M);
  }
  ans = mulMod(ans, cur, M);
}
console.log(ans);
