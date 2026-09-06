let line = 0;
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

while (T--) {
  const [N] = input[line++].split(' ').map(Number);
  const X = [];
  let min = Infinity;
  let min_i = 0;
  for (let i = 0; i < N; i++) {
    const [a, b] = input[line++].split(' ').map(Number);
    X[i] = [a, b, a - b];
    if (min > a) {
      min = a;
      min_i = i;
    }
  }

  if (N === 1) {
    console.log(X[0][0]);
    continue;
  }

  X.sort((s, t) => {
    if (s[2] === t[2]) {
      return s[0] - t[0];
    } else {
      return s[2] - t[2];
    }
  });
  let head = 0;
  let tail = N - 1;
  let ans = 0;
  while (head <= tail) {
    const [ha, hb, hc] = X[head];
    const [ta, tb, tc] = X[tail];

    if (head === tail) {
      if (ha >= min + hb) {
        ans += min + hb;
      } else {
        ans += ha;
      }
      break;
    }

    if (ha + tb >= min + hb + min + tb) {
      ans += min + hb + min + tb;
      head++;
      tail--;
    } else {
      ans += ha + tb;
      head++;
      tail--;
    }
  }
  console.log(ans);
}
