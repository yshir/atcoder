const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

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

const map = {};
const min_queue = new PriorityQueue();
const max_queue = new PriorityQueue();

for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ').map(Number);
  if (query[0] === 1) {
    const [, x] = query;
    if (map[x] === undefined) {
      map[x] = 1;
      max_queue.enqueue(+x, x);
      min_queue.enqueue(-x, x);
    } else {
      map[x]++;
    }
  }
  if (query[0] === 2) {
    const [, x, c] = query;
    map[x] = map[x] || 0;
    map[x] -= c;
    if (map[x] <= 0) {
      delete map[x];
      if (max_queue.top() === x) {
        max_queue.dequeue();
      }
      if (min_queue.top() === x) {
        min_queue.dequeue();
      }
    }
  }
  if (query[0] === 3) {
    let min, max;
    while (!min_queue.empty()) {
      min = min_queue.top();
      if (map[min] !== undefined) {
        break;
      }
      min_queue.dequeue();
    }
    while (!max_queue.empty()) {
      max = max_queue.top();
      if (map[max] !== undefined) {
        break;
      }
      max_queue.dequeue();
    }
    console.log(max - min);
  }
}
