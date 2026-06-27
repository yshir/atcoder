const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const map = {};
const changes = {};
for (let i = 0; i < N; i++) {
  const [a, d, b] = input[i + 1].split(' ').map(Number);
  map[a] = (map[a] || 0) + 1;
  changes[d] = changes[d] || [];
  changes[d].push([a, b]);
}

let ans = Object.keys(map).length;

for (let i = 0; i < M; i++) {
  if (changes[i + 1] !== undefined) {
    for (const [a, b] of changes[i + 1]) {
      map[a]--;
      if (map[a] === 0) {
        ans--;
      }

      if (map[b] === undefined || map[b] === 0) {
        map[b] = 0;
        ans++;
      }
      map[b]++;
    }
  }
  console.log(ans);
}
