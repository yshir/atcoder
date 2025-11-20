const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let cnt = 0n;
for (let a = 1; a ** 3 <= N; a++) {
  for (let b = a; a * b ** 2 <= N; b++) {
    cnt += BigInt(Math.floor(N / (a * b) - b + 1));
  }
}
console.log(cnt.toString());
