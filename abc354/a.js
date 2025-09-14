const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H] = input[0].split(' ').map(Number);

let t = 0;
for (let i = 0; ; i++) {
  t += 2 ** i;
  if (t > H) {
    console.log(i + 1);
    return;
  }
}
