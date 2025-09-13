const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [sx, sy] = input[0].split(' ').map(BigInt);
let [tx, ty] = input[1].split(' ').map(BigInt);

if ((sx + sy) % 2n === 1n) {
  sx -= 1n;
}
if ((tx + ty) % 2n === 1n) {
  tx -= 1n;
}

const dx = sx - tx > 0 ? sx - tx : tx - sx;
const dy = sy - ty > 0 ? sy - ty : ty - sy;

if (dx < dy) {
  console.log(dy.toString());
} else {
  console.log(((dx + dy) / 2n).toString());
}
