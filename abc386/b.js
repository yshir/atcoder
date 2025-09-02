const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let t = [...S];
let cnt = 0;
while (t.length > 0) {
  if (t[0] === '0' && t[1] === '0') {
    cnt++;
    t = t.slice(2);
  } else {
    cnt++;
    t = t.slice(1);
  }
}
console.log(cnt);
