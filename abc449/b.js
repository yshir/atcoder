let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [H, W, Q] = input[line++].split(' ').map(Number);

while (Q--) {
  const query = input[line++].split(' ');
  if (query[0] === '1') {
    const [, r] = query.map(Number);
    console.log(r * W);
    H = H - r;
  }
  if (query[0] === '2') {
    const [, c] = query.map(Number);
    console.log(c * H);
    W = W - c;
  }
}
