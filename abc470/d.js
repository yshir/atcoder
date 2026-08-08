const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
let pos1 = input[1]
  .split(' ')
  .map(Number)
  .map((x) => x - 1);

let pos2 = [];
for (let i = 0; i < N; i++) {
  pos2[pos1[i]] = i;
}

for (let i = 0; i < Q; i++) {
  let [a, x, y] = input[i + 2].split(' ').map(Number);
  x--;
  y--;

  if (a === 1) {
    const x2 = pos1[x];
    const y2 = pos1[y];
    [
      pos1[x], //
      pos1[y],
      pos2[x2], //
      pos2[y2],
    ] = [
      pos1[y], //
      pos1[x],
      pos2[y2], //
      pos2[x2],
    ];
  }
  if (a === 2) {
    [pos1, pos2] = [pos2, pos1];
  }
}

console.log(pos1.map((x) => x + 1).join(' '));
