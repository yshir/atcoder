const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1];
}

const [A, B, C, D] = input[H + 1]
  .split(' ')
  .map(Number)
  .map((x) => x - 1);

const M = [];
for (let i = 0; i < H; i++) {
  M[i] = [];
  for (let j = 0; j < W; j++) {
    M[i][j] = -1;
  }
}

class PriorityQueue {
  #heap = [];

  enqueue(priority, value) {
    this.#heap.push({ priority, value });
    this.#bubbleUp();
  }

  dequeue() {
    if (this.empty()) return null;
    const top = this.#heap[0];
    const end = this.#heap.pop();
    if (this.#heap.length > 0) {
      this.#heap[0] = end;
      this.#sinkDown();
    }
    return top.value;
  }

  top() {
    return this.empty() ? null : this.#heap[0].value;
  }

  empty() {
    return this.#heap.length === 0;
  }

  #bubbleUp() {
    let idx = this.#heap.length - 1;
    const element = this.#heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.#heap[parentIdx];
      if (element.priority <= parent.priority) break;
      this.#heap[parentIdx] = element;
      this.#heap[idx] = parent;
      idx = parentIdx;
    }
  }

  #sinkDown() {
    let idx = 0;
    const length = this.#heap.length;
    const element = this.#heap[0];
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length) {
        const left = this.#heap[leftIdx];
        if (left.priority > element.priority) swap = leftIdx;
      }

      if (rightIdx < length) {
        const right = this.#heap[rightIdx];
        if (
          (swap === null && right.priority > element.priority) ||
          (swap !== null && right.priority > this.#heap[swap].priority)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.#heap[idx] = this.#heap[swap];
      this.#heap[swap] = element;
      idx = swap;
    }
  }
}

const q = new PriorityQueue();

const enqueue = (x, y, p) => {
  if (M[x][y] !== -1) return;
  q.enqueue(-p, { x, y, p });
};

enqueue(A, B, 0);

while (!q.empty()) {
  const { x, y, p } = q.dequeue();
  if (M[x][y] !== -1) continue;
  M[x][y] = p;
  for (const [dx, dy] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || ny < 0 || nx >= H || ny >= W) continue;
    if (S[nx][ny] === '.') {
      enqueue(nx, ny, p);
    } else {
      enqueue(nx, ny, p + 1);
      const nnx = nx + dx;
      const nny = ny + dy;
      if (nnx < 0 || nny < 0 || nnx >= H || nny >= W) continue;
      enqueue(nnx, nny, p + 1);
    }
  }
}

console.log(M[C][D]);
