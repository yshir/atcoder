const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const M = 1e9 + 7;

class ModComb {
  /** @type {number} The prime modulus bound to this instance. */
  MOD;

  /** @type {Float64Array} fact[i] = i! mod MOD for i in [0, maxN]. */
  #fact;
  /** @type {Float64Array} invFact[i] = (i!)^(-1) mod MOD for i in [0, maxN]. */
  #invFact;

  /**
   * Creates a combinatorics context bound to the given prime modulus.
   * Factorial and inverse-factorial tables are fully precomputed up to
   * `maxN` in the constructor, giving O(1) per query thereafter.
   *
   * @param {number} MOD - Prime modulus; must be a safe integer < 2^34.
   * @param {number} maxN - Largest index that will be queried; must be a
   *   non-negative integer with maxN < MOD.
   *
   * @example
   * const mc = new ModComb(998244353, 1e7);
   * mc.nCr(10, 3);           // 120
   * mc.nPr(10, 3);           // 720
   * mc.nHr(5, 3);            // 35
   * mc.powMod(2, 1_000_000); // 2^1000000 mod 998244353
   */
  constructor(MOD, maxN) {
    if (!Number.isSafeInteger(MOD) || MOD < 2 || MOD >= 2 ** 34) {
      throw new RangeError(`MOD must be a safe integer in [2, 2^34), got ${MOD}`);
    }
    if (!Number.isSafeInteger(maxN) || maxN < 0 || maxN >= MOD) {
      throw new RangeError(`maxN must be a non-negative integer < MOD, got ${maxN}`);
    }
    this.MOD = MOD;

    const fact = new Float64Array(maxN + 1);
    const invFact = new Float64Array(maxN + 1);
    fact[0] = 1;
    for (let i = 1; i <= maxN; i++) fact[i] = this.mulMod(fact[i - 1], i);
    invFact[maxN] = this.invMod(fact[maxN]);
    for (let i = maxN - 1; i >= 0; i--) invFact[i] = this.mulMod(invFact[i + 1], i + 1);
    this.#fact = fact;
    this.#invFact = invFact;
  }

  /**
   * Returns the binomial coefficient C(n, r) mod MOD. Yields 0 when r is
   * negative or exceeds n.
   *
   * @param {number} n - Non-negative integer; must be ≤ maxN.
   * @param {number} r - Integer; combinations of n choose r.
   * @returns {number} C(n, r) mod MOD, in [0, MOD).
   */
  nCr(n, r) {
    if (r < 0 || r > n) return 0;
    return this.mulMod(this.mulMod(this.#fact[n], this.#invFact[r]), this.#invFact[n - r]);
  }

  /**
   * Computes C(n, r) mod MOD when n may be huge but r is small (r ≤ maxN).
   * The denominator r! comes from the precomputed table; the numerator
   * n * (n-1) * ... * (n-r+1) is built on the fly in O(r).
   *
   * @param {number} n - Non-negative integer, may exceed maxN (even MOD).
   * @param {number} r - Non-negative integer, r ≤ maxN.
   * @returns {number} C(n, r) mod MOD.
   */
  nCr_large(n, r) {
    if (r < 0 || r > n) return 0;
    const MOD = this.MOD;
    let num = 1;
    const a = ((n % MOD) + MOD) % MOD;
    for (let i = 0; i < r; i++) {
      const term = (a - i + MOD) % MOD; // i < maxN < MOD なので 1 回足せば非負
      num = this.mulMod(num, term);
    }
    return this.mulMod(num, this.#invFact[r]); // ← クラス内に置く必要あり (private 参照)
  }

  /**
   * Returns the permutation count P(n, r) = n! / (n - r)! mod MOD.
   * Yields 0 when r is negative or exceeds n.
   *
   * @param {number} n - Non-negative integer; must be ≤ maxN.
   * @param {number} r - Integer; permutations of length r.
   * @returns {number} P(n, r) mod MOD, in [0, MOD).
   */
  nPr(n, r) {
    if (r < 0 || r > n) return 0;
    return this.mulMod(this.#fact[n], this.#invFact[n - r]);
  }

  /**
   * Returns the multiset combination H(n, r) = C(n + r - 1, r) mod MOD,
   * i.e. ways to choose r items from n types with repetition allowed.
   * Requires n + r - 1 ≤ maxN.
   *
   * @param {number} n - Number of distinct types (non-negative integer).
   * @param {number} r - Number of items to choose (non-negative integer).
   * @returns {number} H(n, r) mod MOD, in [0, MOD).
   */
  nHr(n, r) {
    return this.nCr(n - 1 + r, r);
  }

  /**
   * Computes (a * b) mod MOD using a 15-bit split to keep all intermediate
   * products within Number.MAX_SAFE_INTEGER (2^53). Required when MOD ≥ 2^26,
   * since a naive a * b would overflow Number precision.
   *
   * @param {number} a - Operand in [0, MOD).
   * @param {number} b - Operand in [0, MOD).
   * @returns {number} (a * b) mod MOD, in [0, MOD).
   */
  mulMod(a, b) {
    const ah = Math.floor(a / 32768);
    const al = a % 32768;
    return (((ah * b) % this.MOD) * 32768 + al * b) % this.MOD;
  }

  /**
   * Computes the modular inverse of `a` under MOD via Fermat's little theorem:
   * a^(-1) ≡ a^(MOD-2) (mod MOD). Requires MOD to be prime and gcd(a, MOD) = 1.
   *
   * @param {number} a - Value to invert, in [1, MOD).
   * @returns {number} The modular inverse of a, in [1, MOD).
   */
  invMod(a) {
    return this.powMod(a, this.MOD - 2);
  }

  /**
   * Computes (base ^ exp) mod MOD by binary exponentiation. Runs in O(log exp)
   * multiplications. Handles negative or out-of-range `base` by reducing it
   * into [0, MOD) up front.
   *
   * @param {number} base - Base of the exponentiation.
   * @param {number} exp - Non-negative integer exponent.
   * @returns {number} (base ^ exp) mod MOD, in [0, MOD).
   */
  powMod(base, exp) {
    let r = 1;
    base = ((base % this.MOD) + this.MOD) % this.MOD;
    while (exp > 0) {
      if (exp & 1) r = this.mulMod(r, base);
      base = this.mulMod(base, base);
      exp = Math.floor(exp / 2);
    }
    return r;
  }

  /**
   * Computes (a + b) mod MOD.
   * @param {number} a - Operand in [0, MOD).
   * @param {number} b - Operand in [0, MOD).
   * @returns {number} (a + b) mod MOD, in [0, MOD).
   */
  addMod(a, b) {
    return (a + b) % this.MOD;
  }

  /**
   * Computes (a - b) mod MOD, normalizing into [0, MOD).
   * @param {number} a - Operand in [0, MOD).
   * @param {number} b - Operand in [0, MOD).
   * @returns {number} (a - b) mod MOD, in [0, MOD).
   */
  subMod(a, b) {
    return (((a - b) % this.MOD) + this.MOD) % this.MOD;
  }
}

const mc = new ModComb(M, 1e7);

for (let k = 1; k <= N; k++) {
  let cnt = 0;
  for (let a = 1; a <= Math.floor(N / k + 1); a++) {
    cnt = mc.addMod(cnt, mc.nCr(N - (k - 1) * (a - 1), a));
  }
  console.log(cnt);
}
