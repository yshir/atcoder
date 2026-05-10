const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const s = '!' + input[0];
const t = '?' + input[1];

const dp = [];
for (let i = 0; i < s.length; i++) {
  dp[i] = [];
  for (let j = 0; j < t.length; j++) {
    dp[i][j] = 0;
  }
}

const get = (i, j) => {
  return (dp[i] || [])[j] || 0;
};

for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < t.length; j++) {
    dp[i][j] = Math.max(get(i - 1, j), get(i, j - 1));
    if (s[i] === t[j]) {
      dp[i][j] = Math.max(dp[i][j], get(i - 1, j - 1) + 1);
    }
  }
}

const ans = [];
let i = s.length - 1;
let j = t.length - 1;
while (get(i, j) > 0) {
  if (get(i - 1, j) === get(i, j)) {
    i--;
    continue;
  }
  if (get(i, j - 1) === get(i, j)) {
    j--;
    continue;
  }
  ans.push(s[i]);
  i--;
  j--;
}
console.log(ans.reverse().join(''));
