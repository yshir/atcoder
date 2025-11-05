const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X] = input[0].split(' ').map(BigInt);

if (X < 0n) {
  console.log(((X - 9n) / 10n).toString());
} else {
  console.log((X / 10n).toString());
}
