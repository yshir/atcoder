const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const map = {};
for (let i = 0; i < M; i++) {
  map[i] = -1;
}

for (let i = 0; i < N; i++) {
  let [c, s] = input[i + 1].split(' ').map(Number);
  c--;
  map[c] = Math.max(map[c], s);
}

const ans = [];
for (let i = 0; i < M; i++) {
  ans.push(map[i]);
}
console.log(ans.join(' '));
