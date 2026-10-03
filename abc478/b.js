const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, V] = input[0].split(' ').map(Number);
const W = input[1].split(' ').map(Number);

let ans = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const ni = i + 1;
      const nj = j + 1;
      const nk = k + 1;
      if (ni + nj + nk <= V) {
        ans = Math.max(ans, W[i] + W[j] + W[k]);
      }
    }
  }
}
console.log(ans);
