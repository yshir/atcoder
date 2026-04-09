const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const mod = (a, b) => {
  let c = a % b;
  if (c < 0) {
    c += b;
  }
  return c;
};

const map = [];
for (let k = 0; k <= 10; k++) {
  map[k] = new Map();
}
for (let i = 0; i < N; i++) {
  const k = String(A[i]).length;
  const m = mod(A[i], M);
  map[k].set(m, (map[k].get(m) || 0) + 1);
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  for (let k = 0; k <= 10; k++) {
    const m = mod(-1 * A[i] * 10 ** k, M);
    cnt += map[k].get(m) || 0;
  }
}
console.log(cnt);
