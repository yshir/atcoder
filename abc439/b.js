const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N] = input[0].split(' ').map(Number);

const set = new Set([N]);
while (true) {
  let sum = 0;
  const S = String(N);
  for (let i = 0; i < S.length; i++) {
    sum += S[i] ** 2;
  }
  if (sum === 1) {
    console.log('Yes');
    return;
  }
  if (set.has(sum)) {
    console.log('No');
    return;
  }
  set.add(sum);
  N = sum;
}
