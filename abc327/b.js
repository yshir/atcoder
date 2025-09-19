const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [B] = input[0].split(' ').map(BigInt);

for (let i = 1n; i <= 18n; i++) {
  if (i ** i === B) {
    console.log(i.toString());
    return;
  }
}
console.log(-1);
