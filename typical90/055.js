const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, P, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

/**
 * Computes (a * b) mod MOD using a 15-bit split to keep all intermediate
 * products within Number.MAX_SAFE_INTEGER (2^53). Required when MOD ≥ 2^26,
 * since a naive a * b would overflow Number precision.
 *
 * @param {number} a - Operand in [0, MOD).
 * @param {number} b - Operand in [0, MOD).
 * @returns {number} (a * b) mod MOD, in [0, MOD).
 */
const modmul = (a, b) => {
  const ah = Math.floor(a / 32768);
  const al = a % 32768;
  return (((ah * b) % P) * 32768 + al * b) % P;
};

let ans = 0;
for (let i1 = 0; i1 < N; i1++) {
  const v1 = A[i1];
  for (let i2 = i1 + 1; i2 < N; i2++) {
    const v2 = modmul(v1, A[i2]);
    for (let i3 = i2 + 1; i3 < N; i3++) {
      const v3 = modmul(v2, A[i3]);
      for (let i4 = i3 + 1; i4 < N; i4++) {
        const v4 = modmul(v3, A[i4]);
        for (let i5 = i4 + 1; i5 < N; i5++) {
          const v5 = modmul(v4, A[i5]);
          if (v5 === Q) {
            ans++;
          }
        }
      }
    }
  }
}
console.log(ans);
