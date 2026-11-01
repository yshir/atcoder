const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const S = [];
for (let i = 0; i < 5; i++) {
  S[i] = input[i];
}

let ans = Infinity;

for (let i = 0; i < 5; i++) {
  let cnt = 0;
  for (let j = 0; j < 5; j++) if (S[i][j] === '.') cnt++;
  ans = Math.min(ans, cnt);
}

for (let i = 0; i < 5; i++) {
  let cnt = 0;
  for (let j = 0; j < 5; j++) if (S[j][i] === '.') cnt++;
  ans = Math.min(ans, cnt);
}

{
  let cnt = 0;
  for (let i = 0; i < 5; i++) if (S[i][i] === '.') cnt++;
  ans = Math.min(ans, cnt);
}

{
  let cnt = 0;
  for (let i = 0; i < 5; i++) if (S[4 - i][4 - i] === '.') cnt++;
  ans = Math.min(ans, cnt);
}

console.log(ans);
