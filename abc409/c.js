const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, L] = input[0].split(' ').map(Number);
const D = input[1].split(' ').map(Number);

const P = [0];
for (let i = 0; i < N - 1; i++) {
  P[i + 1] = (P[i] + D[i]) % L;
}

const Q = {};
for (let i = 0; i < N; i++) {
  Q[P[i]] = (Q[P[i]] || 0) + 1;
}

let cnt = 0;
const seen = new Set();
for (const k in Q) {
  const a = Number(k);
  const b = (a + L / 3) % L;
  const c = (b + L / 3) % L;
  if (seen.has(a) || seen.has(b) || seen.has(c)) {
    continue;
  }
  seen.add(a);
  seen.add(b);
  seen.add(c);

  const a_cnt = Q[String(a)];
  const b_cnt = Q[String(b)];
  const c_cnt = Q[String(c)];
  if (a_cnt == null || b_cnt == null || c_cnt == null) {
    continue;
  }

  cnt += a_cnt * b_cnt * c_cnt;
}
console.log(cnt);
