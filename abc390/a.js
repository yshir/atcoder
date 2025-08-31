const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c, d, e] = input[0].split(' ').map(Number);

const sorted = [a, b, c, d, e].sort((a, b) => a - b);

const equal = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

if (
  equal([b, a, c, d, e], sorted) ||
  equal([a, c, b, d, e], sorted) ||
  equal([a, b, d, c, e], sorted) ||
  equal([a, b, c, e, d], sorted)
) {
  console.log('Yes');
} else {
  console.log('No');
}
