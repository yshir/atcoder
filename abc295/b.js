const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const B = [];
for (let i = 0; i < R; i++) {
  B[i] = input[i + 1].split('');
}

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (/^[1-9]$/.test(B[i][j])) {
      const n = Number(B[i][j]);
      for (let ki = 0; ki < R; ki++) {
        for (let kj = 0; kj < C; kj++) {
          if (Math.abs(ki - i) + Math.abs(kj - j) <= n && B[ki][kj] === '#') {
            B[ki][kj] = '.';
          }
        }
      }
      B[i][j] = '.';
    }
  }
}

for (let i = 0; i < R; i++) {
  console.log(B[i].join(''));
}
