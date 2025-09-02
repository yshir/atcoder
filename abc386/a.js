const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C, D] = input[0].split(' ').map(Number);

for (let i = 1; i <= 13; i++) {
  const map = {};
  map[A] = (map[A] || 0) + 1;
  map[B] = (map[B] || 0) + 1;
  map[C] = (map[C] || 0) + 1;
  map[D] = (map[D] || 0) + 1;
  map[i] = (map[i] || 0) + 1;

  const set = Object.values(map);
  if (set.length === 2) {
    if ((set[0] === 2 && set[1] === 3) || (set[1] === 2 && set[0] === 3)) {
      console.log('Yes');
      return;
    }
  }
}
console.log('No');
