const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, P, Q, R, S] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [...A];
for (let i = 0; i <= Q - P; i++) {
  [B[P + i - 1], B[R + i - 1]] = [B[R + i - 1], B[P + i - 1]];
}
console.log(B.join(' '));
