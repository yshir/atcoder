const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, D] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('');
}

const f = (x, y) => {
  const set = new Set();
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (Math.abs(x - i) + Math.abs(y - j) <= D && S[i][j] === '.') {
        set.add(`${i}_${j}`);
      }
    }
  }
  return set;
};

const list = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '#') {
      continue;
    }
    list.push(f(i, j));
  }
}

let max = 0;
for (let i = 0; i < list.length; i++) {
  for (let j = i + 1; j < list.length; j++) {
    max = Math.max(max, new Set([...list[i], ...list[j]]).size);
  }
}
console.log(max);
