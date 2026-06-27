const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let e = 0;
let w = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'E') {
    e++;
  } else {
    w++;
  }
}

if (e > w) {
  console.log('East');
} else {
  console.log('West');
}
