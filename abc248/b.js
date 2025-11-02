const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, K] = input[0].split(' ').map(Number);

for (let i = 0; ; i++) {
  if (A * K ** i >= B) {
    console.log(i);
    return;
  }
}
