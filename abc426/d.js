const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N] = input[i * 2 + 1].split(' ').map(Number);
  const S = input[i * 2 + 2];

  const rle = [];

  let l = 0;
  for (let j = 1; j < N; j++) {
    if (S[l] !== S[j]) {
      rle.push([S[l], j - l]);
      l = j;
    }
  }
  if (S[l] === S[N - 1]) {
    rle.push([S[l], N - l]);
  }

  if (rle.length === 1) {
    console.log(0);
    continue;
  }

  let ans = Number.MAX_VALUE;

  for (const k of ['0', '1']) {
    let max = 0;
    let max_i = 0;
    for (let j = 0; j < rle.length; j++) {
      if (rle[j][0] === k && max < rle[j][1]) {
        max = rle[j][1];
        max_i = j;
      }
    }
    let cnt = 0;
    for (let j = 0; j < rle.length; j++) {
      if (j !== max_i) {
        if (rle[j][0] === k) {
          cnt += rle[j][1] * 2;
        } else {
          cnt += rle[j][1] * 1;
        }
      }
    }
    ans = Math.min(ans, cnt);
  }

  console.log(ans);
}
