let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

class Deque {
  constructor(capacity = 16) {
    let cap = 1;
    while (cap < capacity) cap <<= 1;
    this.data = new Array(cap);
    this.mask = cap - 1;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  pushBack(v) {
    if (this.size === this.data.length) this._grow();
    this.data[this.tail] = v;
    this.tail = (this.tail + 1) & this.mask;
    this.size++;
  }

  pushFront(v) {
    if (this.size === this.data.length) this._grow();
    this.head = (this.head - 1) & this.mask;
    this.data[this.head] = v;
    this.size++;
  }

  popBack() {
    if (this.size === 0) return undefined;
    this.tail = (this.tail - 1) & this.mask;
    const v = this.data[this.tail];
    this.size--;
    return v;
  }

  popFront() {
    if (this.size === 0) return undefined;
    const v = this.data[this.head];
    this.head = (this.head + 1) & this.mask;
    this.size--;
    return v;
  }

  front() {
    return this.size === 0 ? undefined : this.data[this.head];
  }

  back() {
    return this.size === 0 ? undefined : this.data[(this.tail - 1) & this.mask];
  }

  get(i) {
    return this.data[(this.head + i) & this.mask];
  }

  empty() {
    return this.size === 0;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i++) yield this.data[(this.head + i) & this.mask];
  }

  _grow() {
    const newCap = this.data.length << 1;
    const nd = new Array(newCap);
    for (let i = 0; i < this.size; i++) {
      nd[i] = this.data[(this.head + i) & this.mask];
    }
    this.data = nd;
    this.mask = newCap - 1;
    this.head = 0;
    this.tail = this.size;
  }
}

const INF = 1e6;

const D = [
  [0, 1],
  [1, 0],
  [0, -1], //
  [-1, 0],
];
const E = {
  A: 0,
  B: 1,
  C: 3, //
};

while (T--) {
  const [H, W] = input[line++].split(' ').map(Number);
  const S = [];
  for (let i = 0; i < H; i++) S[i] = input[line++];

  const dp = [];
  for (let i = 0; i < H; i++) {
    dp[i] = [];
    for (let j = 0; j < W; j++) {
      dp[i][j] = [];
      for (let d = 0; d < 4; d++) {
        dp[i][j][d] = INF;
      }
    }
  }

  const dq = new Deque();
  dq.pushBack([0, -1, 0, 0]);

  while (!dq.empty()) {
    const [pi, pj, d, c] = dq.popFront();
    const [di, dj] = D[d];
    const i = pi + di;
    const j = pj + dj;
    if (i < 0 || i >= H || j < 0 || j >= W) continue;

    for (let nd = 0; nd < 4; nd++) {
      if ((d ^ nd) === 2) {
        continue;
      }

      if ((d ^ nd) === E[S[i][j]]) {
        // cost 0
        if (dp[i][j][nd] <= c) continue;
        dp[i][j][nd] = c;
        dq.pushFront([i, j, nd, c]);
      } else {
        // cost 1
        if (dp[i][j][nd] <= c + 1) continue;
        dp[i][j][nd] = c + 1;
        dq.pushBack([i, j, nd, c + 1]);
      }
    }
  }

  console.log(dp[H - 1][W - 1][0]);
}
