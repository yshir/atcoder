const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);

const S = [];
for (let i = 0; i < N; i++) S[i] = 0n;

const map = new Map();
map.set('0', N);

let cur = 1;

const get = (a) => {
  return map.get(a.toString()) || 0;
};

const set = (a, b) => {
  return map.set(a.toString(), b);
};

const incr = (a) => {
  return set(a, get(a) + 1);
};

const decr = (a) => {
  return set(a, get(a) - 1);
};

for (let i = 0; i < T; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b = BigInt(b);

  decr(S[a]);
  if (get(S[a]) === 0) cur--;

  S[a] += b;

  incr(S[a]);
  if (get(S[a]) === 1) cur++;

  console.log(cur);
}
