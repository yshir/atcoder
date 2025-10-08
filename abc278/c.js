const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const map = {};

for (let i = 0; i < Q; i++) {
  const [t, a, b] = input[i + 1].split(' ').map(Number);
  if (t === 1) {
    map[a] = map[a] || {};
    map[a][b] = true;
  }
  if (t === 2) {
    map[a] = map[a] || {};
    map[a][b] = false;
  }
  if (t === 3) {
    map[a] = map[a] || {};
    map[b] = map[b] || {};
    console.log(map[a][b] && map[b][a] ? 'Yes' : 'No');
  }
}
