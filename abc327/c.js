const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const A = [];
for (let i = 0; i < 9; i++) {
  A[i] = input[i].split(' ').map(Number);
}

for (let i = 0; i < 9; i++) {
  const s = new Set();
  for (let j = 0; j < 9; j++) {
    s.add(A[i][j]);
  }
  if (s.size !== 9) {
    console.log('No');
    return;
  }
}

for (let i = 0; i < 9; i++) {
  const s = new Set();
  for (let j = 0; j < 9; j++) {
    s.add(A[j][i]);
  }
  if (s.size !== 9) {
    console.log('No');
    return;
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const s = new Set();
    for (let k = 0; k < 3; k++) {
      for (let l = 0; l < 3; l++) {
        s.add(A[i * 3 + k][j * 3 + l]);
      }
    }
    if (s.size !== 9) {
      console.log('No');
      return;
    }
  }
}

console.log('Yes');
