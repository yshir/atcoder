let ptr = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, R, C] = input[ptr++].split(' ').map(Number);
const [N] = input[ptr++].split(' ').map(Number);

const W_R = new Map();
const W_C = new Map();
for (let i = 0; i < N; i++) {
  let [r, c] = input[ptr++].split(' ').map(Number);
  r--;
  c--;
  if (W_R.get(r) === undefined) W_R.set(r, []);
  if (W_C.get(c) === undefined) W_C.set(c, []);
  W_R.get(r).push(c);
  W_C.get(c).push(r);
}
for (const [k, v] of W_R) W_R.get(k, v).sort((a, b) => a - b);
for (const [k, v] of W_C) W_C.get(k, v).sort((a, b) => a - b);

let cur_r = R - 1;
let cur_c = C - 1;

const lower_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

const DIR = {
  L: [0, -1],
  R: [0, 1],
  U: [-1, 0],
  D: [1, 0],
};

const DIR_F = {
  L: () => {
    const list = W_R.get(cur_r);
    if (list === undefined) return Infinity;
    const idx = lower_bound(list, cur_c) - 1;
    return idx === -1 ? Infinity : Math.abs(list[idx] - cur_c) - 1;
  },
  R: () => {
    const list = W_R.get(cur_r);
    if (list === undefined) return Infinity;
    const idx = lower_bound(list, cur_c);
    return idx === list.length ? Infinity : Math.abs(list[idx] - cur_c) - 1;
  },
  U: () => {
    const list = W_C.get(cur_c);
    if (list === undefined) return Infinity;
    const idx = lower_bound(list, cur_r) - 1;
    return idx === -1 ? Infinity : Math.abs(list[idx] - cur_r) - 1;
  },
  D: () => {
    const list = W_C.get(cur_c);
    if (list === undefined) return Infinity;
    const idx = lower_bound(list, cur_r);
    return idx === list.length ? Infinity : Math.abs(list[idx] - cur_r) - 1;
  },
};

const [Q] = input[ptr++].split(' ').map(Number);
for (let i = 0; i < Q; i++) {
  const [d, l] = input[ptr++].split(' ');
  const [dr, dc] = DIR[d];
  const L = Math.min(DIR_F[d](), Number(l));
  cur_r += dr * L;
  cur_c += dc * L;
  cur_r = Math.max(0, Math.min(H - 1, cur_r));
  cur_c = Math.max(0, Math.min(W - 1, cur_c));
  console.log(`${cur_r + 1} ${cur_c + 1}`);
}
