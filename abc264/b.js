const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);

const S = [];
for (let i = 0; i < 15; i++) {
  S[i] = [];
  for (let j = 0; j < 15; j++) {
    const min = Math.min(
      i, //
      j,
      14 - i,
      14 - j
    );
    if (min % 2 === 0) {
      S[i][j] = '#';
    } else {
      S[i][j] = '.';
    }
  }
}

if (S[R - 1][C - 1] === '#') {
  console.log('black');
} else {
  console.log('white');
}
