const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  const [a, c] = input[i + 1].split(' ').map(Number);
  if (map[c] === undefined) {
    map[c] = a;
  } else {
    map[c] = Math.min(map[c], a);
  }
}

console.log(Math.max(...Object.values(map)));
