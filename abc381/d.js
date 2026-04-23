const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let ans = 0;

const f = (init) => {
  let queue = [];
  let queue_idx = -1;
  const set = new Set();
  for (let i = init; i < N; i += 2) {
    if (A[i] === A[i - 1]) {
      if (set.has(A[i])) {
        while (1) {
          const v = queue[queue_idx++];
          set.delete(v);
          if (v === A[i]) break;
        }
      }
      queue.push(A[i]);
      set.add(A[i]);
      ans = Math.max(ans, set.size);
    } else {
      queue = [];
      queue_idx = -1;
      set.clear();
    }
  }
};

f(1);
f(2);

console.log(ans * 2);
