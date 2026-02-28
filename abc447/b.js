const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let max = 0;
const map = {};
for (let i = 0; i < S.length; i++) {
  map[S[i]] = (map[S[i]] || 0) + 1;
  max = Math.max(max, map[S[i]]);
}

const trim = [];
for (k in map) {
  if (max === map[k]) {
    trim.push(k);
  }
}

let ans = S;
for (c of trim) {
  ans = ans.replaceAll(c, '');
}
console.log(ans);
