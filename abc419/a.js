const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const s = input[0];

if (s === 'red') {
  console.log('SSS');
} else if (s === 'blue') {
  console.log('FFF');
} else if (s === 'green') {
  console.log('MMM');
} else {
  console.log('Unknown');
}
