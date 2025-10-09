const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A, B] = input[0].split(' ').map(Number);

let ans = 0;
for (let i = 1; i <= N; i++) {
  let n = i;
  let v = 0;
  while (n > 0) {
    v += n % 10;
    n = Math.floor(n / 10);
  }
  if (A <= v && v <= B) ans += i;
}
console.log(ans);
