let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[line++].split(' ').map(Number);

for (let n = 0; n < T; n++) {
  const [N] = input[line++].split(' ').map(Number);
  const A = [];

  let w_total = 0;
  let p_total = 0;
  let w_cnt = 0;
  for (let i = 0; i < N; i++) {
    const [w, p] = input[line++].split(' ').map(Number);
    A[i] = { w, p };
    w_total += w;
    w_cnt++;
  }
  A.sort((a, b) => b.w + b.p - (a.w + a.p));

  for (let i = 0; i < N; i++) {
    w_total -= A[i].w;
    p_total += A[i].p;
    w_cnt--;
    if (w_total <= p_total) {
      console.log(w_cnt);
      break;
    }
  }
}
