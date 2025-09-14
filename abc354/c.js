const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const cards = [];
for (let i = 0; i < N; i++) {
  const [a, c] = input[i + 1].split(' ').map(Number);
  cards[i] = { n: i + 1, a, c, del: false };
}
cards.sort((a, b) => b.a - a.a);

let l = 0;
for (let r = 1; r < N; r++) {
  if (cards[l].c < cards[r].c) {
    cards[r].del = true;
  } else {
    l = r;
  }
}

const ans = cards
  .filter((x) => !x.del)
  .map((x) => x.n)
  .sort((a, b) => a - b);
console.log(ans.length);
console.log(ans.join(' '));
