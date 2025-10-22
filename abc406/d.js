const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, N] = input[0].split(' ').map(Number);

const rows = [];
const row_cnt = [];
for (let i = 0; i < H; i++) {
  rows[i] = [];
  row_cnt[i] = 0;
}
const cols = [];
const col_cnt = [];
for (let i = 0; i < W; i++) {
  cols[i] = [];
  col_cnt[i] = 0;
}

for (let i = 0; i < N; i++) {
  let [x, y] = input[i + 1].split(' ').map(Number);
  x--;
  y--;
  rows[x].push(y);
  row_cnt[x]++;
  cols[y].push(x);
  col_cnt[y]++;
}

const seen_x = new Set();
const seen_y = new Set();

const [Q] = input[1 + N].split(' ').map(Number);
for (let i = 0; i < Q; i++) {
  const query = input[i + 2 + N].split(' ').map(Number);
  if (query[0] === 1) {
    let [, x] = query;
    x--;
    if (seen_x.has(x)) {
      console.log(0);
    } else {
      console.log(row_cnt[x]);
      seen_x.add(x);
      row_cnt[x] = 0;
      for (const y of rows[x]) {
        col_cnt[y]--;
      }
    }
  }
  if (query[0] === 2) {
    let [, y] = query;
    y--;
    if (seen_y.has(y)) {
      console.log(0);
    } else {
      console.log(col_cnt[y]);
      seen_y.add(y);
      col_cnt[y] = 0;
      for (const x of cols[y]) {
        row_cnt[x]--;
      }
    }
  }
}
