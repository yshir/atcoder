let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

while (T--) {
  let [N, A, B] = input[line++].split(' ').map(Number);
  A--;
  B--;

  if (N % 2 === 1 || (A + B) % 2 === 0) {
    console.log('No');
    continue;
  }

  let H = N;
  let W = N;

  const ans1 = [];
  const ans2 = [];

  while (A >= 2) {
    ans1.push(...('R'.repeat(W - 1) + 'D' + 'L'.repeat(W - 1) + 'D'));
    A -= 2;
    H -= 2;
  }
  while (A < H - 2) {
    ans2.push(...('R'.repeat(W - 1) + 'D' + 'L'.repeat(W - 1) + 'D'));
    H -= 2;
  }
  while (B >= 2) {
    ans1.push(...('D'.repeat(H - 1) + 'R' + 'U'.repeat(H - 1) + 'R'));
    B -= 2;
    W -= 2;
  }
  while (B < W - 2) {
    ans2.push(...('D'.repeat(H - 1) + 'R' + 'U'.repeat(H - 1) + 'R'));
    W -= 2;
  }

  if (A === 1) {
    ans1.push(...'RD');
  } else {
    ans1.push(...'DR');
  }

  console.log('Yes');
  console.log([...ans1, ...ans2.reverse()].join(''));
}
