const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

const queue = [];
for (let i = 0; i < Q; i++) {
  const q = input[i + 1].split(' ').map(Number);
  if (q[0] === 1) {
    const [, x] = q;
    queue.push(x);
  }
  if (q[0] === 2) {
    const x = queue.shift();
    console.log(x);
  }
}
