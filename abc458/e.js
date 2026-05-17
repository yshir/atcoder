const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c] = input[0].split(' ').map(Number);

const M = 998244353;

const { nHr, mulMod } = (() => {
  const _MOD = 998244353;
  const _CAP = 1e7;

  const mulMod = (a, b) => {
    const ah = Math.floor(a / 32768);
    const al = a % 32768;
    return (((ah * b) % _MOD) * 32768 + al * b) % _MOD;
  };

  const powMod = (base, exp) => {
    let result = 1;
    base = ((base % _MOD) + _MOD) % _MOD;
    while (exp > 0) {
      if (exp & 1) result = mulMod(result, base);
      base = mulMod(base, base);
      exp = Math.floor(exp / 2);
    }
    return result;
  };

  const invMod = (a) => powMod(a, _MOD - 2);

  const fact = new Float64Array(_CAP + 1);
  const invFact = new Float64Array(_CAP + 1);
  fact[0] = 1;
  for (let i = 1; i <= _CAP; i++) fact[i] = mulMod(fact[i - 1], i);
  invFact[_CAP] = invMod(fact[_CAP]);
  for (let i = _CAP - 1; i >= 0; i--) invFact[i] = mulMod(invFact[i + 1], i + 1);

  /**
   * @param {number} n
   * @param {number} r
   * @returns {number}
   */
  const nCr = (n, r) => {
    if (r < 0 || r > n) return 0;
    return mulMod(mulMod(fact[n], invFact[r]), invFact[n - r]);
  };

  /**
   * @param {number} n
   * @param {number} r
   * @returns {number}
   */
  const nPr = (n, r) => {
    if (r < 0 || r > n) return 0;
    return mulMod(fact[n], invFact[n - r]);
  };

  /**
   * @param {number} n
   * @param {number} r
   * @returns {number}
   */
  const nHr = (n, r) => nCr(n - 1 + r, r);

  return {
    nCr,
    nPr,
    nHr,
  };
})();

let ans = 0;

const f = (a, b, c) => {
  for (let g = 2; ; g++) {
    const ga = Math.ceil(g / 2);
    const gc = g - ga;
    if (ga > a || gc > c || g - 1 > b) break;

    const na = a - ga;
    const nb = b - (g - 1);
    const nc = c - gc;

    let cur = 1;
    cur = mulMod(cur, nHr(ga, na));
    cur = mulMod(cur, nHr(gc, nc));
    cur = mulMod(cur, nHr(a + c + 1, nb));
    ans = (ans + cur) % M;
  }
};

f(a, b, c); // a,c,a,...
f(c, b, a); // c,a,c,...

console.log(ans);
