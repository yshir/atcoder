const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let s = '';
let too_long = false;
for (let i = 0; i < N; i++) {
  const [c, _l] = input[i + 1].split(' ');
  const l = Number(_l);
  if (s.length + l > 100) {
    too_long = true;
    break;
  }
  for (let j = 0; j < l; j++) {
    s += c;
  }
}
console.log(too_long ? 'Too Long' : s);
