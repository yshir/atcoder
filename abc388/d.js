const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

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

  size() {
    return this.#heap.length;
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

const ans = [];
const queue = new PriorityQueue();
for (let i = 0; i < N; i++) {
  while (!queue.empty() && queue.top() - i < 0) {
    queue.dequeue();
  }
  const value = A[i] + queue.size() + i;
  queue.enqueue(-value, value);
  ans.push(value);
}

console.log(ans.map((x) => Math.max(0, x - (N - 1))).join(' '));
