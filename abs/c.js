const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const s = input[0];

let cnt = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === '1') cnt++;
}
console.log(cnt);
