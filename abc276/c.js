const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

for (let i = N - 2; i >= 0; i--) {
  if (P[i] > P[i + 1]) {
    let j = N - 1;
    while (P[i] < P[j]) {
      j--;
    }
    [P[i], P[j]] = [P[j], P[i]];
    console.log([...P.slice(0, i + 1), ...P.slice(i + 1).reverse()].join(' '));
    return;
  }
}
