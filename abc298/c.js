const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const [Q] = input[1].split(' ').map(Number);

const box = [];
for (let i = 0; i < N; i++) {
  box[i] = [];
}

const card = [];
for (let i = 0; i < 2 * 10 ** 5 + 1; i++) {
  card[i] = new Set();
}

for (let i = 0; i < Q; i++) {
  const query = input[i + 2].split(' ').map(Number);
  if (query[0] === 1) {
    const [, x, y] = query;
    box[y - 1].push(x);
    card[x].add(y);
  }
  if (query[0] === 2) {
    const [, x] = query;
    console.log(box[x - 1].sort((a, b) => a - b).join(' '));
  }
  if (query[0] === 3) {
    const [, x] = query;
    console.log([...card[x]].sort((a, b) => a - b).join(' '));
  }
}
