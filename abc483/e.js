const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

const comb = (n) => {
  return (n * (n - 1n)) / 2n;
};

const a0_at_least = (() => {
  const map = new Map();
  for (let i = 0; i < N; i++) {
    map.set(S[i], (map.get(S[i]) || 0n) + 1n);
  }
  let cnt = 0n;
  for (const [, v] of map) cnt += comb(v);
  return cnt;
})();

const a1_at_least = (() => {
  let cnt = 0n;
  for (let k = 0; k < M; k++) {
    const map = new Map();
    for (let i = 0; i < N; i++) {
      let t = '';
      for (let j = 0; j < M; j++) if (k !== j) t += S[i][j];
      map.set(t, (map.get(t) || 0n) + 1n);
    }
    for (const [, v] of map) cnt += comb(v);
  }
  return cnt;
})();

const a2_at_least = (() => {
  let cnt = 0n;
  for (let k1 = 0; k1 < M; k1++) {
    for (let k2 = k1 + 1; k2 < M; k2++) {
      const map = new Map();
      for (let i = 0; i < N; i++) {
        let t = '';
        for (let j = 0; j < M; j++) if (k1 !== j && k2 !== j) t += S[i][j];
        map.set(t, (map.get(t) || 0n) + 1n);
      }
      for (const [, v] of map) cnt += comb(v);
    }
  }
  return cnt;
})();

const a0 = (() => {
  return a0_at_least;
})();

const a1 = (() => {
  return a1_at_least - a0 * BigInt(M);
})();

const a2 = (() => {
  return a2_at_least - a1 * (BigInt(M) - 1n) - a0 * comb(BigInt(M));
})();

console.log((a0 + a1 + a2).toString());
