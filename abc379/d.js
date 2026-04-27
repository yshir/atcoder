let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [Q] = input[line++].split(' ').map(Number);

const queue = [];
let queue_idx = 0;

let now = 0;

while (Q--) {
  const query = input[line++].split(' ').map(Number);
  if (query[0] === 1) {
    queue.push(now);
  }
  if (query[0] === 2) {
    const [, t] = query;
    now += t;
  }
  if (query[0] === 3) {
    const [, h] = query;
    let cnt = 0;
    while (queue[queue_idx] !== undefined && now - queue[queue_idx] >= h) {
      queue_idx++;
      cnt++;
    }
    console.log(cnt);
  }
}
