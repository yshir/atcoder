const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = Array(10 ** 6 + 1).fill(0);
for (let i = 0; i < N; i++) {
  B[A[i]]++;
}

let cnt = 0;

if (D === 0) {
  for (let i = 0; i < B.length; i++) {
    if (B[i] > 1) {
      cnt += B[i] - 1;
    }
  }
} else {
  for (let i = 0; i < D; i++) {
    const C = [];
    for (let j = i; j < B.length; j += D) {
      C.push(B[j]);
    }

    const dp = { o: [0], x: [0] };
    let sum = 0;
    for (let j = 0; j < C.length; j++) {
      sum += C[j];
      dp.o[j + 1] = dp.x[j] + C[j];
      dp.x[j + 1] = Math.max(dp.x[j], dp.o[j]);
    }
    cnt += sum - Math.max(dp.o[C.length], dp.x[C.length]);
  }
}

console.log(cnt);
