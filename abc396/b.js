const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

const cards = Array(100).fill(0);
for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ').map(Number);
  if (query[0] === 1) {
    const [, x] = query;
    cards.push(x);
  } else {
    const card = cards.pop();
    console.log(card);
  }
}
