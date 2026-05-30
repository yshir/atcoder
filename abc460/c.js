const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

A.sort((x, y) => x - y);
B.sort((x, y) => x - y);

let ans = 0;
let i = 0;

(() => {
  for (let j = 0; j < M; j++) {
    while (A[i] * 2 < B[j]) {
      i++;
      if (i === N) return;
    }

    ans++;
    i++;
    if (i === N) return;
  }
})();

console.log(ans);
