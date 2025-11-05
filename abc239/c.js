const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [x1, y1, x2, y2] = input[0].split(' ').map(Number);

const d = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
];

for (let i = 0; i < d.length; i++) {
  for (let j = 0; j < d.length; j++) {
    const [dx1, dy1] = d[i];
    const [dx2, dy2] = d[j];
    const nx1 = x1 + dx1;
    const ny1 = y1 + dy1;
    const nx2 = x2 + dx2;
    const ny2 = y2 + dy2;
    if (nx1 === nx2 && ny1 === ny2) {
      console.log('Yes');
      return;
    }
  }
}

console.log('No');
