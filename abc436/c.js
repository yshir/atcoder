const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const set = new Set();
const key = (i, j) => `${i}_${j}`;

for (let k = 0; k < M; k++) {
  const [i, j] = input[k + 1].split(' ').map(Number);

  const a = key(i, j);
  const b = key(i + 1, j);
  const c = key(i, j + 1);
  const d = key(i + 1, j + 1);
  if (set.has(a) || set.has(b) || set.has(c) || set.has(d)) {
    continue;
  }
  set.add(a);
  set.add(b);
  set.add(c);
  set.add(d);
}
console.log(set.size / 4);
