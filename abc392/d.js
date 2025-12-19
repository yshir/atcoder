const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const K_map = [];
const K_length = [];
for (let i = 0; i < N; i++) {
  const [, ...K] = input[i + 1].split(' ');
  K_length[i] = K.length;
  K_map[i] = K.reduce((a, b) => {
    a[b] = a[b] || 0;
    a[b]++;
    return a;
  }, {});
}

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let cur = 0;
    for (const k in K_map[i]) {
      cur += K_map[i][k] * (K_map[j][k] || 0);
    }
    const total = K_length[i] * K_length[j];
    max = Math.max(max, cur / total);
  }
}
console.log(max);
