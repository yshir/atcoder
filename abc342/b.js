const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);
const [Q] = input[2].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  map[P[i]] = i;
}

for (let i = 0; i < Q; i++) {
  const [a, b] = input[3 + i].split(' ').map(Number);
  if (map[a] < map[b]) {
    console.log(a);
  } else {
    console.log(b);
  }
}
