let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[line++].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N, H] = input[line++].split(' ').map(Number);

  let min_h = H;
  let max_h = H;
  let cur_t = 0;
  let ok = true;
  for (let j = 0; j < N; j++) {
    const [t, l, u] = input[line++].split(' ').map(Number);
    if (!ok) continue;

    const delta = t - cur_t;
    max_h = max_h + delta;
    min_h = Math.max(min_h - delta, 1);
    if (max_h < l || min_h > u) {
      ok = false;
      continue;
    }
    max_h = Math.min(max_h, u);
    min_h = Math.max(min_h, l);
    cur_t = t;
  }
  console.log(ok ? 'Yes' : 'No');
}
