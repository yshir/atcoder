const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

const C = [];
for (let i = 0; i < H; i++) {
  C[i] = [];
  for (let j = 0; j < W; j++) {
    C[i][j] = input[i + 1][j].charCodeAt(0) - 'a'.charCodeAt(0);
  }
}

const row_del = new Uint8Array(H);
const row_map = Array(H)
  .fill(undefined)
  .map(() => new Uint16Array(26));

const col_del = new Uint8Array(W);
const col_map = Array(W)
  .fill(undefined)
  .map(() => new Uint16Array(26));

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    row_map[i][C[i][j]]++;
    col_map[j][C[i][j]]++;
  }
}

const deleting = (map) => {
  let k = 0;
  let t = 0;
  for (let a = 0; a < 26; a++) {
    if (map[a] > 0) k++;
    t += map[a];
  }
  return k === 1 && t >= 2;
};

const delete_cell = (i, j) => {
  if (row_del[i] || col_del[j]) return;
  row_map[i][C[i][j]]--;
  col_map[j][C[i][j]]--;
};

let upd = true;
while (upd) {
  const row_deleting = [];
  const col_deleting = [];
  for (let i = 0; i < H; i++) if (!row_del[i] && deleting(row_map[i])) row_deleting.push(i);
  for (let j = 0; j < W; j++) if (!col_del[j] && deleting(col_map[j])) col_deleting.push(j);
  upd = row_deleting.length > 0 || col_deleting.length > 0;

  for (const i of row_deleting) {
    for (let j = 0; j < W; j++) delete_cell(i, j);
    row_del[i] = 1;
  }
  for (const j of col_deleting) {
    for (let i = 0; i < H; i++) delete_cell(i, j);
    col_del[j] = 1;
  }
}

let ans = 0;
for (let i = 0; i < H; i++) {
  for (let a = 0; a < 26; a++) ans += row_map[i][a];
}
console.log(ans);
