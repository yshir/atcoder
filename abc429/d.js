const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, C] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  map[A[i]] = map[A[i]] || { p: A[i], cnt: 0 };
  map[A[i]].cnt++;
}

const L = Object.values(map);
L.sort((a, b) => a.p - b.p);
const size = L.length;
for (let i = 0; i < size; i++) {
  L.push({ p: L[i].p + M, cnt: L[i].cnt });
}

let r = 0;
let now = 0n;
let ans = 0n;
for (let l = 0; l < size; l++) {
  while (now < C) {
    r++;
    now += BigInt(L[r].cnt);
  }
  ans += now * BigInt(L[l + 1].p - L[l].p);
  now -= BigInt(L[l + 1].cnt);
}

console.log(ans.toString());
