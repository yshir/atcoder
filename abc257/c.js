const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];
const W = input[2].split(' ').map(Number);

// memo: 区間の問題に落とし込める。精査してないけど区間にしたあとは +1, -1 の地点だけとって累積和とか使えそうな予感

const map = {};

for (let i = 0; i < N; i++) {
  const idx = W[i];
  if (S[i] === '0') {
    map[idx] = map[idx] || { idx, cnt: 0 };
    map[idx].cnt++;
  }
  if (S[i] === '1') {
    map[0] = map[0] || { idx: 0, cnt: 0 };
    map[0].cnt++;
    map[idx] = map[idx] || { idx, cnt: 0 };
    map[idx].cnt--;
  }
}

const A = Object.values(map)
  .sort((a, b) => a.idx - b.idx)
  .map((x) => x.cnt);

let ans = 0;
let now = 0;
for (let i = 0; i < A.length; i++) {
  now += A[i];
  ans = Math.max(ans, now);
}

console.log(ans);
