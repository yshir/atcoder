const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);

if (
  A + B === 9 ||
  A - B === 9 ||
  A * B === 9 ||
  A === 9 * B //
) {
  console.log('Nine');
} else {
  console.log('Nein');
}
