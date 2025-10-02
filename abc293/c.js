const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
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

const q = new Queue();
q.enqueue({ x: 0, y: 0, path: new Set() });

let cnt = 0;
while (!q.empty()) {
  const { x, y, path } = q.dequeue();
  if (path.has(A[x][y])) {
    continue;
  }

  const newPath = new Set([...path, A[x][y]]);
  if (newPath.size === H + W - 1) {
    cnt++;
  }

  for (const [dx, dy] of [
    [1, 0],
    [0, 1],
  ]) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx >= H || ny >= W) continue;
    q.enqueue({ x: nx, y: ny, path: newPath });
  }
}
console.log(cnt);
