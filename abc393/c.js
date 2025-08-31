const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

let cnt = 0;
const set = new Set();
for (let i = 0; i < M; i++) {
  const [u, v] = input[i + 1].split(' ');
  if (u === v) {
    cnt++;
    continue;
  }

  if (set.has(`${u}-${v}`)) {
    cnt++;
  } else {
    set.add(`${u}-${v}`);
    set.add(`${v}-${u}`);
  }
}
console.log(cnt);
