const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const ACGT = [...'ACGT'];

let ans = 0;
let cur = 0;
for (const c of S) {
  if (ACGT.includes(c)) {
    cur++;
    if (ans < cur) {
      ans = cur;
    }
  } else {
    cur = 0;
  }
}
console.log(ans);
