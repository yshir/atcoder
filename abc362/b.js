const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [xa, ya] = input[0].split(' ').map(Number);
const [xb, yb] = input[1].split(' ').map(Number);
const [xc, yc] = input[2].split(' ').map(Number);

const ab = (xa - xb) * (xa - xb) + (ya - yb) * (ya - yb);
const ac = (xa - xc) * (xa - xc) + (ya - yc) * (ya - yc);
const bc = (xc - xb) * (xc - xb) + (yc - yb) * (yc - yb);

if (ab + ac === bc || ab + bc === ac || bc + ac === ab) {
  console.log('Yes');
} else {
  console.log('No');
}
