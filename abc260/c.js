const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X, Y] = input[0].split(' ').map(Number);

const memo1 = {};
const memo2 = {};

const red = (lv) => {
  if (memo1[lv] !== undefined) {
    return memo1[lv];
  }

  if (lv === 1) {
    return 0;
  }

  let cnt = 0;
  cnt += red(lv - 1);
  for (let i = 0; i < X; i++) cnt += blue(lv);
  memo1[lv] = cnt;
  return cnt;
};

const blue = (lv) => {
  if (memo2[lv] !== undefined) {
    return memo2[lv];
  }
  if (lv === 1) {
    return 1;
  }

  let cnt = 0;
  cnt += red(lv - 1);
  for (let i = 0; i < Y; i++) cnt += blue(lv - 1);
  memo2[lv] = cnt;
  return cnt;
};

console.log(red(N));
