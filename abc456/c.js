const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const list = [];
let arr = [];
for (let i = 0; i < S.length; i++) {
  arr.push(S[i]);
  if (S[i] === S[i + 1]) {
    list.push(arr);
    arr = [];
  }
}
list.push(arr);

const A = 998244353;

let ans = 0;

for (const arr of list) {
  ans += (arr.length * (arr.length + 1)) / 2;
  ans %= A;
}

console.log(ans);
