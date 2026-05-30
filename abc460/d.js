const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
let S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1];

// edge case
{
  let b = 0;
  for (let i = 0; i < H; i++) for (let j = 0; j < W; j++) if (S[i][j] === '#') b++;

  // all white or all black
  if (b === 0 || b === H * W) {
    for (let i = 0; i < H; i++) {
      const a = [];
      for (let j = 0; j < W; j++) {
        a[j] = '.';
      }
      console.log(a.join(''));
    }
    return;
  }
}

// pre2
for (let k = 0; k < 2; k++) {
  const A = [];
  for (let i = 0; i < H; i++) {
    A[i] = [];
    for (let j = 0; j < W; j++) {
      if (S[i][j] === '#') {
        A[i][j] = '.';
      } else {
        let cnt = 0;
        for (const [dx, dy] of [
          [1, -1],
          [1, 0],
          [1, 1],
          [0, 1],
          [0, -1],
          [-1, 1],
          [-1, 0],
          [-1, -1],
        ]) {
          const nx = i + dx;
          const ny = j + dy;
          if (nx < 0 || ny < 0 || nx === H || ny === W) continue;
          if (S[nx][ny] === '#') cnt++;
        }
        if (cnt > 0) {
          A[i][j] = '#';
        } else {
          A[i][j] = '.';
        }
      }
    }
  }
  for (let i = 0; i < H; i++) {
    S[i] = [...A[i]];
  }
}

class Queue {
  #stackPush = [];
  #stackPop = [];

  enqueue(value) {
    this.#stackPush.push(value);
  }

  dequeue() {
    if (this.#stackPop.length === 0) {
      while (this.#stackPush.length > 0) {
        this.#stackPop.push(this.#stackPush.pop());
      }
    }
    return this.#stackPop.pop();
  }

  empty() {
    return this.#stackPush.length === 0 && this.#stackPop.length === 0;
  }
}

const INF = 1e8;

const T = [];
for (let i = 0; i < H; i++) {
  T[i] = [];
  for (let j = 0; j < W; j++) {
    T[i][j] = INF;
  }
}

const q = new Queue();
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '#') {
      T[i][j] = 0;
      q.enqueue([i, j, 0]);
    }
  }
}

while (!q.empty()) {
  const [i, j, v] = q.dequeue();
  for (const [dx, dy] of [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [0, -1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
  ]) {
    const nx = i + dx;
    const ny = j + dy;
    if (nx < 0 || ny < 0 || nx === H || ny === W) continue;
    if (T[nx][ny] === INF) {
      T[nx][ny] = v + 1;
      q.enqueue([nx, ny, v + 1]);
    }
  }
}

for (let i = 0; i < H; i++) {
  const ans = [];
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '#' || T[i][j] % 2 === 0) {
      ans[j] = '#';
    } else {
      ans[j] = '.';
    }
  }
  console.log(ans.join(''));
}
