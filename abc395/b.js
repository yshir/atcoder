const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const grid = [];
for (let i = 0; i < N; i++) {
  grid[i] = [];
  for (let j = 0; j < N; j++) {
    grid[i][j] = '?';
  }
}

for (let i = 0; i < N; i++) {
  for (let j = i; j < N - i; j++) {
    for (let k = i; k < N - i; k++) {
      grid[j][k] = i % 2 === 1 ? '.' : '#';
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(grid[i].join(''));
}
