const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  const [s, t] = input[i + 1].split(' ');
  A.push([s, t]);
}

for (let i = 0; i < N; i++) {
  const [s, t] = A[i];
  let ok_s = true;
  let ok_t = true;
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    if (s === A[j][0] || s === A[j][1]) ok_s = false;
    if (t === A[j][0] || t === A[j][1]) ok_t = false;
  }
  if (!ok_s & !ok_t) {
    console.log('No');
    return;
  }
}
console.log('Yes');
