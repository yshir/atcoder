const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let r_min = Number.MAX_VALUE;
let r_max = 0;
let c_min = Number.MAX_VALUE;
let c_max = 0;

for (let i = 0; i < N; i++) {
  const [r, c] = input[i + 1].split(' ').map(Number);
  if (r_min > r) r_min = r;
  if (r_max < r) r_max = r;
  if (c_min > c) c_min = c;
  if (c_max < c) c_max = c;
}

const ans = Math.max(Math.ceil((r_max - r_min) / 2), Math.ceil((c_max - c_min) / 2));

console.log(ans);
