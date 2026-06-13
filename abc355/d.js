const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const E = [];
for (let i = 0; i < N; i++) {
  const [l, r] = input[i + 1].split(' ').map(Number);
  E.push([l, 0]);
  E.push([r, 1]);
}
E.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

let cur = 0;
let ans = 0n;
for (let i = 0; i < E.length; i++) {
  const [a, b] = E[i];
  if (b === 0) {
    ans += BigInt(cur);
    cur++;
  } else {
    cur--;
  }
}
console.log(ans.toString());
