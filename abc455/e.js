const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const f = (P) => {
  let ans = 0;
  let cur = 0;
  const X = { 0: 1 };
  for (let i = 0; i < S.length; i++) {
    cur += P[S[i]];
    X[cur] = X[cur] || 0;
    ans += X[cur];
    X[cur]++;
  }
  return ans;
};

let ans = 0;
ans += f({ A: 0, B: 0, C: 0 });
ans -= f({ A: 1, B: -1, C: 0 });
ans -= f({ A: 0, B: 1, C: -1 });
ans -= f({ A: 1, B: 0, C: -1 });
const B = 10 ** 7;
ans += f({ A: B + 1, B: -B, C: -1 }) * 2;
console.log(ans);
