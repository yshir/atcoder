const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const R = input[1].split(' ').map(Number);

const f = (A) => {
  const size = A.length;
  if (size === N) {
    const sum = A.reduce((a, b) => a + b, 0);
    if (sum % K === 0) {
      console.log(A.join(' '));
    }
    return;
  }

  for (let i = 1; i <= R[size]; i++) {
    f([...A, i]);
  }
};

f([]);
