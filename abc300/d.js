const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

/**
 * Smallest-prime-factor (SPF) sieve for fast integer factorization.
 *
 * - Construction precomputes `spf[i] = smallest prime factor of i`
 *   for every i in [2, maxN] in O(N log log N).
 * - factorize / factorizeList / distinctPrimes are O(log x) per query.
 * - isPrime is O(1).
 *
 * Why SPF:
 *   Each step replaces x with x / spf[x]. Since spf[x] >= 2, x at least
 *   halves on every iteration, so the loop terminates in floor(log2 x)
 *   steps. After the one-time sieve, every query is a tight loop with no
 *   trial-division search.
 *
 * Typical use:
 *   Competitive programming where many values, each bounded by a known
 *   maxN (say 1e6 or 1e7), need to be factorized.
 */
class PrimeSieve {
  /**
   * Build the SPF sieve. - O(N log log N)
   * @param {number} maxN Largest value that can later be factorized. Must be an integer >= 2.
   *
   * @example
   * const ps = new PrimeSieve(1_000_000);
   * ps.factorize(360); // => Map(3) { 2 => 3, 3 => 2, 5 => 1 }
   */
  constructor(maxN) {
    if (!Number.isInteger(maxN) || maxN < 2) {
      throw new RangeError(`maxN must be an integer >= 2, got ${maxN}`);
    }
    this.maxN = maxN;

    // spf[i] = smallest prime factor of i, for i >= 2.
    // If i is prime, spf[i] === i.
    //
    // Three optimizations vs the textbook sieve:
    //   1. Stamp all evens with 2 up front, then ignore evens entirely.
    //   2. Outer loop walks odd i only (i += 2).
    //   3. For each odd prime i, inner loop starts at i*i (smaller
    //      composites are already stamped by smaller primes) and steps
    //      by 2*i (even multiples were handled in step 1).
    const spf = new Uint32Array(maxN + 1);
    for (let j = 2; j <= maxN; j += 2) spf[j] = 2;
    for (let i = 3; i <= maxN; i += 2) {
      if (spf[i] === 0) {
        spf[i] = i;
        if (i * i <= maxN) {
          for (let j = i * i; j <= maxN; j += 2 * i) {
            if (spf[j] === 0) spf[j] = i;
          }
        }
      }
    }
    this.spf = spf;
  }

  /**
   * Factorize `x` into a Map of prime -> exponent. - O(log x)
   * Returns an empty Map when `x === 1`.
   * @param {number} x Integer in [1, maxN].
   * @returns {Map<number, number>}
   *
   * For hot paths that only need to iterate the result, prefer
   * {@link factorizeFlat} to avoid Map allocation overhead.
   *
   * @example
   * const ps = new PrimeSieve(100);
   * ps.factorize(60); // => Map(3) { 2 => 2, 3 => 1, 5 => 1 }
   * ps.factorize(1);  // => Map(0) {}
   * ps.factorize(13); // => Map(1) { 13 => 1 }
   */
  factorize(x) {
    this.#validate(x);
    const result = new Map();
    while (x > 1) {
      const p = this.spf[x];
      result.set(p, (result.get(p) ?? 0) + 1);
      x = (x / p) >>> 0; // unsigned 32-bit truncation; p divides x exactly
    }
    return result;
  }

  /**
   * Factorize `x` into a flat array of [prime, exponent, prime, exponent, ...]
   * in ascending order of primes. - O(log x)
   *
   * Returns an empty array when `x === 1`.
   *
   * Flat-array form avoids the per-call Map allocation of {@link factorize} and
   * lets callers iterate with a plain index loop, which is several times faster
   * than iterating a Map in hot paths.
   *
   * @param {number} x Integer in [1, maxN].
   * @returns {number[]} Pairs of (prime, exponent) laid out as a flat array.
   *
   * @example
   * const ps = new PrimeSieve(100);
   * ps.factorizeFlat(60); // => [2, 2, 3, 1, 5, 1]
   * ps.factorizeFlat(1);  // => []
   * ps.factorizeFlat(13); // => [13, 1]
   */
  factorizeFlat(x) {
    this.#validate(x);
    const result = [];
    while (x > 1) {
      const p = this.spf[x];
      let e = 0;
      while (this.spf[x] === p) {
        x = (x / p) >>> 0;
        e++;
      }
      result.push(p, e);
    }
    return result;
  }

  /**
   * Prime factors of `x` with multiplicity, in ascending order. - O(log x)
   * @param {number} x Integer in [1, maxN].
   * @returns {number[]}
   *
   * @example
   * const ps = new PrimeSieve(100);
   * ps.factorizeList(12); // => [2, 2, 3]
   * ps.factorizeList(7);  // => [7]
   * ps.factorizeList(1);  // => []
   */
  factorizeList(x) {
    this.#validate(x);
    const result = [];
    while (x > 1) {
      const p = this.spf[x];
      result.push(p);
      x = (x / p) >>> 0;
    }
    return result;
  }

  /**
   * Distinct prime factors of `x`, in ascending order. - O(log x)
   * @param {number} x Integer in [1, maxN].
   * @returns {number[]}
   *
   * @example
   * const ps = new PrimeSieve(1000);
   * ps.distinctPrimes(360); // => [2, 3, 5]
   * ps.distinctPrimes(49);  // => [7]
   * ps.distinctPrimes(1);   // => []
   */
  distinctPrimes(x) {
    this.#validate(x);
    const result = [];
    while (x > 1) {
      const p = this.spf[x];
      result.push(p);
      while (x % p === 0) x = (x / p) >>> 0;
    }
    return result;
  }

  /**
   * Whether `x` is prime. - O(1)
   * Returns `false` for any `x` outside [2, maxN].
   * @param {number} x
   * @returns {boolean}
   *
   * @example
   * const ps = new PrimeSieve(1000);
   * ps.isPrime(2);   // => true
   * ps.isPrime(7);   // => true
   * ps.isPrime(9);   // => false
   * ps.isPrime(1);   // => false
   */
  isPrime(x) {
    if (!Number.isInteger(x) || x < 2 || x > this.maxN) return false;
    return this.spf[x] === x;
  }

  /** Guard that `x` is an integer in [1, maxN]. */
  #validate(x) {
    if (!Number.isInteger(x) || x < 1 || x > this.maxN) {
      throw new RangeError(`x must be an integer in [1, ${this.maxN}], got ${x}`);
    }
  }
}

const s = new PrimeSieve(1e6 + 10);

const primes = [];
for (let i = 0; i < 1e6 + 10; i++) {
  if (s.isPrime(i)) primes.push(BigInt(i));
}

const f = (ai, bi, ci) => {
  return primes[ai] ** 2n * primes[bi] * primes[ci] ** 2n <= N;
};

let ai, bi, ci;
let cnt = 0;

ai = 0;
for (; ; ai++) {
  bi = ai + 1;
  ci = bi + 1;
  if (!f(ai, bi, ci)) break;
  for (; ; bi++) {
    ci = bi + 1;
    if (!f(ai, bi, ci)) break;
    for (; ; ci++) {
      if (!f(ai, bi, ci)) break;
      cnt++;
    }
  }
}
console.log(cnt);
