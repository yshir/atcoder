const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, x, y] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let dp_x = new Set([A[0]]);
let dp_y = new Set([0]);

for (let i = 1; i < N; i++) {
  if (i % 2 === 0) {
    // x
    const dp_x_next = new Set();
    for (const x of dp_x) {
      if (x + A[i] < 1e5) dp_x_next.add(x + A[i]);
      if (x - A[i] > -1e5) dp_x_next.add(x - A[i]);
    }
    dp_x = dp_x_next;
  } else {
    // y
    const dp_y_next = new Set();
    for (const y of dp_y) {
      if (y + A[i] < 1e5) dp_y_next.add(y + A[i]);
      if (y - A[i] > -1e5) dp_y_next.add(y - A[i]);
    }
    dp_y = dp_y_next;
  }
}

if (dp_x.has(x) && dp_y.has(y)) {
  console.log('Yes');
} else {
  console.log('No');
}
