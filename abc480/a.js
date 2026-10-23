const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const x = input[0];
const y = input[1];

const f = () => {
  if (x[0] === 'A' && y[1] === 'D') return false;
  if (x[1] === 'A' && y[0] === 'D') return false;
  if (x[0] === 'D' && y[1] === 'A') return false;
  if (x[1] === 'D' && y[0] === 'A') return false;
  return true;
};
console.log(f() ? 'Yes' : 'No');
