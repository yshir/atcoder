const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

const DIR_NONE = 'NONE';
const DIR_U = 'd';
const DIR_D = 'u';
const DIR_L = 'l';
const DIR_R = 'r';

let start = [];
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('');
  for (let j = 0; j < W; j++) {
    if (S[i][j] === 'S') {
      start = [i, j];
    }
  }
}

const seen = [];
for (let i = 0; i < H; i++) {
  seen[i] = [];
  for (let j = 0; j < W; j++) {
    const kind = S[i][j];
    if (kind === '#') {
      seen[i][j] = {
        kind,
        done: {
          [DIR_U]: true,
          [DIR_D]: true,
          [DIR_L]: true,
          [DIR_R]: true,
        },
      };
    } else {
      seen[i][j] = {
        kind,
        done: {
          [DIR_U]: false,
          [DIR_D]: false,
          [DIR_L]: false,
          [DIR_R]: false,
        },
      };
    }
  }
}

const getNext = (dir, m) => {
  if (m === 'S') {
    return [
      [DIR_U, 1, 0],
      [DIR_D, -1, 0],
      [DIR_L, 0, -1],
      [DIR_R, 0, 1],
    ];
  }
  if (m === 'G') {
    return [];
  }
  if (m === '.') {
    return [
      [DIR_U, 1, 0],
      [DIR_D, -1, 0],
      [DIR_L, 0, -1],
      [DIR_R, 0, 1],
    ];
  }
  if (m === '#') {
    return [];
  }
  if (m === 'o') {
    return {
      [DIR_U]: [[DIR_U, 1, 0]],
      [DIR_D]: [[DIR_D, -1, 0]],
      [DIR_L]: [[DIR_L, 0, -1]],
      [DIR_R]: [[DIR_R, 0, 1]],
    }[dir];
  }
  if (m === 'x') {
    return {
      [DIR_U]: [
        [DIR_D, -1, 0],
        [DIR_L, 0, -1],
        [DIR_R, 0, 1],
      ],
      [DIR_D]: [
        [DIR_U, 1, 0],
        [DIR_L, 0, -1],
        [DIR_R, 0, 1],
      ],
      [DIR_L]: [
        [DIR_U, 1, 0],
        [DIR_D, -1, 0],
        [DIR_R, 0, 1],
      ],
      [DIR_R]: [
        [DIR_U, 1, 0],
        [DIR_D, -1, 0],
        [DIR_L, 0, -1],
      ],
    }[dir];
  }
};

const stack = [];
const path = [];

stack.push([DIR_NONE, start[0], start[1], -1]);

while (stack.length > 0) {
  const [dir, i, j, len] = stack.pop();
  while (len >= 0 && len < path.length) path.pop();
  if (dir !== DIR_NONE) path.push(dir);

  if (S[i][j] === 'G') {
    if (path.length <= 5 * 10 ** 6) {
      console.log('Yes');
      console.log(path.map((x) => x.toUpperCase()).join(''));
      return;
    }
  } else {
    for (const [nd, di, dj] of getNext(dir, S[i][j])) {
      const ni = i + di;
      const nj = j + dj;
      if (ni < 0 || ni >= H || nj < 0 || nj >= W) continue;
      if (seen[ni][nj].done[nd]) continue;
      seen[ni][nj].done[nd] = true;
      stack.push([nd, ni, nj, len + 1]);
    }
  }
}

console.log('No');
