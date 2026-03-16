const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = 1; i <= N; i++) {
  let cur = 0;
  const s = String(i);
  for (let j = 0; j < s.length; j++) {
    cur += Number(s[j]);
  }
  if (cur === K) cnt++;
}
console.log(cnt);
