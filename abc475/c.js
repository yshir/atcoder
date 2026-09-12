const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [N, S, L] = input[0].split(' ').map(BigInt);
N = Number(N);
S = Number(S) - 1;
const A = input[1].split(' ').map(BigInt);

const B = [0n];
for (let i = 0; i < A.length; i++) {
  B[i + 1] = B[i] + A[i];
}

const abs = (a) => {
  return a >= 0n ? a : -a;
};

// console.log(B.join(' '));

let ans = 1;
for (let i = 0; i < N; i++) {
  const diff = B[S] - B[i];
  if (diff === 0n) {
    continue;
  }

  const distance = abs(diff);
  if (distance > L) {
    continue;
  }

  let rem = L - distance;
  let cur = Math.abs(S - i) + 1;
  ans = Math.max(ans, cur);

  if (diff > 0) {
    for (let j = S; j < A.length; j++) {
      if (rem - A[j] * 2n >= 0) {
        rem -= A[j] * 2n;
        cur++;
      } else {
        break;
      }
    }
    // console.log('A', { i, cur, distance });
  } else {
    for (let j = S - 1; j >= 0; j--) {
      if (rem - A[j] * 2n >= 0) {
        rem -= A[j] * 2n;
        cur++;
      } else {
        break;
      }
    }
    // console.log('B', { i, cur, distance });
  }

  ans = Math.max(ans, cur);
}
console.log(ans);
