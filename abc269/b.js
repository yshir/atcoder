const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = [];
for (let i = 0; i < 10; i++) {
  S[i] = input[i] + '.';
}
S[10] = '.'.repeat(11);

for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    if (S[i][j] === '#') {
      for (let k = i + 1; k < 11; k++) {
        if (S[k][j] === '.') {
          for (let l = j + 1; l < 11; l++) {
            if (S[i][l] === '.') {
              console.log([i + 1, k].join(' '));
              console.log([j + 1, l].join(' '));
              return;
            }
          }
        }
      }
    }
  }
}
