const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [px, py, qx, qy, rx, ry, sx, sy] = input[i + 1].split(' ').map(BigInt);

  const dy1 = qy - py;
  const dx1 = qx - px;

  const dy2 = sy - ry;
  const dx2 = sx - rx;

  const ax = px + qx;
  const ay = py + qy;

  const bx = rx + sx;
  const by = ry + sy;

  const dx3 = ax - bx;
  const dy3 = ay - by;

  if (dy1 * dx2 !== dy2 * dx1) {
    console.log('Yes');
    continue;
  }

  if (dy2 * dy3 === -1n * dx2 * dx3) {
    console.log('Yes');
    continue;
  }

  console.log('No');
}
