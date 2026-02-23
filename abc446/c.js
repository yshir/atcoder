let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

while (T--) {
  const [N, D] = input[line++].split(' ').map(Number);
  const A = input[line++].split(' ').map(Number);
  const B = input[line++].split(' ').map(Number);

  const queue = [...A];
  let idx_out = 0;
  for (let i = 0; i < N; i++) {
    // step2
    let remain = B[i];
    while (remain > 0) {
      const consume = Math.min(queue[idx_out], remain);
      remain -= consume;
      queue[idx_out] -= consume;
      if (queue[idx_out] === 0) idx_out++;
    }

    // step3
    idx_out = Math.max(idx_out, i - D + 1);
  }

  let sum = 0;
  for (let i = idx_out; i < queue.length; i++) {
    sum += queue[i];
  }
  console.log(sum);
}
