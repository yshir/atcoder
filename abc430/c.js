const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A, B] = input[0].split(' ').map(Number);
const S = input[1];

let ra = 0;
let rb = 0;
let cnt_a = 0;
let cnt_b = 0;
let ans = 0;
for (let l = 0; l < N; l++) {
  while (ra < N && cnt_a < A) {
    if (S[ra] === 'a') cnt_a++;
    ra++;
  }
  if (ra === N && cnt_a < A) ra++;

  while (rb < N && cnt_b < B) {
    if (S[rb] === 'b') cnt_b++;
    rb++;
  }
  if (rb === N && cnt_b < B) rb++;

  if (S[l] === 'a') cnt_a--;
  if (S[l] === 'b') cnt_b--;

  ans += Math.max(rb - ra, 0);
}
console.log(ans);
