const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, K, P] = input[0].split(' ').map(BigInt);
N = Number(N);
K = Number(K);
const A = input[1].split(' ').map(BigInt);

const f = (A) => {
  const res = [];
  for (let i = 0; i <= A.length; i++) res[i] = [];

  for (let i = 0; i < 1 << A.length; i++) {
    let cnt = 0;
    let sum = 0n;
    for (let j = 0; j < A.length; j++) {
      if ((i >> j) & 1) {
        cnt++;
        sum += A[j];
      }
    }
    if (sum <= P) res[cnt].push(sum);
  }

  for (let i = 0; i <= A.length; i++) res[i].sort((a, b) => (a < b ? -1 : 1));
  return res;
};

const mid = Math.floor(N / 2);
const res1 = f(A.slice(0, mid));
const res2 = f(A.slice(mid));

const upper_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] <= n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

let ans = 0n;
for (let i = 0; i <= K; i++) {
  if (res2[K - i] === undefined) continue;
  for (const v1 of res1[i] || []) {
    ans += BigInt(upper_bound(res2[K - i], P - v1));
  }
}
console.log(ans.toString());
