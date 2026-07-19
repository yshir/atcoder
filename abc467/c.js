const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const c1 = (() => {
  let cnt = 0;
  const C = [...A];
  for (let i = 0; i < N - 1; i++) {
    if ((C[i] + C[i + 1]) % 2 !== B[i]) {
      cnt++;
      C[i + 1]++;
    }
  }
  return cnt;
})();

const c2 = (() => {
  let cnt = 1;
  const C = [...A];
  C[0]++;
  for (let i = 0; i < N - 1; i++) {
    if ((C[i] + C[i + 1]) % 2 !== B[i]) {
      cnt++;
      C[i + 1]++;
    }
  }
  return cnt;
})();

console.log(Math.min(c1, c2));
