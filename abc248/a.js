const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

for (let i = 0; i < 10; i++) {
  if (!S.includes(i)) {
    console.log(i);
    return;
  }
}
