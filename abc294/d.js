const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

let wait = 1;
const queue = [];
let queue_h = 0;
const gone = new Set();

for (let i = 0; i < Q; i++) {
  const q = input[i + 1].split(' ').map(Number);
  if (q[0] === 1) {
    queue.push(wait++);
  }
  if (q[0] === 2) {
    gone.add(q[1]);
  }
  if (q[0] === 3) {
    while (1) {
      const head = queue[queue_h];
      if (gone.has(head)) {
        queue_h++;
      } else {
        console.log(head);
        break;
      }
    }
  }
}
