const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

let r = 1;
let cnt = N;
const R = Array(N).fill(-1);
while (cnt > 0) {
  let max = -1;
  let K = [];
  for (let i = 0; i < N; i++) {
    if (R[i] !== -1) {
      continue;
    }
    if (max === P[i]) {
      K.push(i);
    } else if (max < P[i]) {
      max = P[i];
      K = [i];
    }
  }

  for (let i = 0; i < K.length; i++) {
    R[K[i]] = r;
  }
  r += K.length;
  cnt -= K.length;
}
console.log(R.join('\n'));
