const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[i + 1];

const d = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, 0],
  [1, -1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (const [dx, dy] of d) {
      let cnt = 0;
      let ok = true;
      for (let k = 0; k < 6; k++) {
        const nx = i + dx * k;
        const ny = j + dy * k;
        if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
          ok = false;
          break;
        }
        if (S[nx][ny] === '#') cnt++;
      }
      if (ok && cnt >= 4) {
        console.log('Yes');
        return;
      }
    }
  }
}
console.log('No');
