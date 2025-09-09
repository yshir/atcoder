const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

const map = {};
let cnt = 0;
for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ').map(Number);
  if (query[0] === 1) {
    const [, x] = query;
    if (map[x] === undefined || map[x] === 0) {
      map[x] = 0;
      cnt++;
    }
    map[x]++;
  }
  if (query[0] === 2) {
    const [, x] = query;
    map[x]--;
    if (map[x] === 0) {
      cnt--;
    }
  }
  if (query[0] === 3) {
    console.log(cnt);
  }
}
