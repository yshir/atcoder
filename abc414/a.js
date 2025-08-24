const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  if (x <= L && R <= y) cnt++;
}
console.log(cnt);
