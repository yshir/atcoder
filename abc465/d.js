let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

const abs = (a) => {
  return a >= 0n ? a : -a;
};

while (T--) {
  const [X, Y, K] = input[line++].split(' ').map(BigInt);

  let ans = 0;
  let a = X;
  let b = Y;
  while (a !== b) {
    ans++;
    if (a > b) {
      a /= K;
    } else {
      b /= K;
    }
  }
  console.log(ans);
}
