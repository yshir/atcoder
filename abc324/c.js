const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, _T] = input[0].split(' ');
N = Number(N);

const ans = [];
for (let i = 0; i < N; i++) {
  let T = _T;
  let S = input[i + 1];

  if (S.length === T.length) {
    let diff = 0;
    for (let j = 0; j < S.length; j++) {
      if (S[j] !== T[j]) {
        diff++;
      }
    }
    if (diff <= 1) {
      ans.push(i + 1);
    }
  } else if (S.length - 1 === T.length || S.length === T.length - 1) {
    if (S.length > T.length) {
      [S, T] = [T, S];
    }

    let l = 0;
    let r = 0;
    while (r - l <= 1 && l < S.length && r < T.length) {
      if (S[l] !== T[r]) {
        r++;
      } else {
        l++;
        r++;
      }
    }
    if (r - l <= 1) {
      ans.push(i + 1);
    }
  }
}
console.log(ans.length);
console.log(ans.join(' '));
