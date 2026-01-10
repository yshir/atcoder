const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);

for (let i = 1; ; i++) {
  const ans = C * i;
  if (A <= ans && ans <= B) {
    console.log(ans);
    return;
  }
  if (ans > B) {
    console.log(-1);
    return;
  }
}
