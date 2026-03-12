const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  const [h, w] = input[i + 1].split(' ').map(Number);
  A[i] = { i, h, w };
}

let w_arr = [...A].sort((a, b) => b.w - a.w);
let w_idx = 0;
let h_arr = [...A].sort((a, b) => b.h - a.h);
let h_idx = 0;

let p_w = 0;
let p_h = 0;

const used = new Set();
const ans = [];

for (let i = 0; i < N; i++) {
  while (1) {
    if (used.has(w_arr[w_idx].i)) {
      w_idx++;
      continue;
    }
    if (used.has(h_arr[h_idx].i)) {
      h_idx++;
      continue;
    }
    break;
  }

  if (w_arr[w_idx].w === W - p_w) {
    ans[w_arr[w_idx].i] = [p_h + 1, p_w + 1];
    used.add(w_arr[w_idx].i);
    p_h += w_arr[w_idx].h;
    continue;
  }
  if (h_arr[h_idx].h === H - p_h) {
    ans[h_arr[h_idx].i] = [p_h + 1, p_w + 1];
    used.add(h_arr[h_idx].i);
    p_w += h_arr[h_idx].w;
    continue;
  }

  throw new Error('invalid state');
}

console.log(ans.map((x) => x.join(' ')).join('\n'));
