let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [W, H] = input[line++].split(' ').map(Number);
const [N] = input[line++].split(' ').map(Number);
const P = [];
for (let i = 0; i < N; i++) {
  P[i] = input[line++].split(' ').map(Number);
}
line++;
let A = input[line++].split(' ').map(Number);
line++;
let B = input[line++].split(' ').map(Number);

const map = new Map();
const key = (x, y) => `${x}_${y}`;

A.sort((s, t) => s - t);
A = [0, ...A];
B.sort((s, t) => s - t);
B = [0, ...B];

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

for (const [x, y] of P) {
  const x_idx = lower_bound(A, x);
  const y_idx = lower_bound(B, y);
  const k = key(x_idx, y_idx);
  map.set(k, (map.get(k) || 0) + 1);
}

let min = map.size === A.length * B.length ? Infinity : 0;
let max = 0;

for (const [k, v] of map) {
  min = Math.min(min, v);
  max = Math.max(max, v);
}

console.log([min, max].join(' '));
