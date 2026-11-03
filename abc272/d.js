const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const D = [];

for (let di = 0; di <= N; di++) {
  for (let dj = 0; dj <= N; dj++) {
    if (di ** 2 + dj ** 2 === M) {
      D.push([di, dj]);
    }
  }
}

const L = D.length;
for (let i = 0; i < L; i++) {
  const [di, dj] = D[i];
  D.push([-di, -dj]);
  D.push([-di, dj]);
  D.push([di, -dj]);
}

/**
 * A max-heap based priority queue where higher priority values are dequeued first.
 *
 * @example
 * const pq = new PriorityQueue();
 * pq.enqueue(1, 'low');
 * pq.enqueue(5, 'high');
 * pq.enqueue(3, 'medium');
 * pq.dequeue(); // 'high'
 * pq.dequeue(); // 'medium'
 * pq.dequeue(); // 'low'
 */
class PriorityQueue {
  #heap = [];

  /**
   * Adds a value to the queue with the specified priority.
   * @param {number} priority - The priority of the value (higher = dequeued earlier).
   * @param {*} value - The value to store in the queue.
   *
   * @example
   * const pq = new PriorityQueue();
   * pq.enqueue(10, 'urgent task');
   * pq.enqueue(1, 'low priority task');
   */
  enqueue(priority, value) {
    this.#heap.push({ priority, value });
    this.#bubbleUp();
  }

  /**
   * Removes and returns the value with the highest priority.
   * @returns {*} The value with the highest priority, or `null` if the queue is empty.
   *
   * @example
   * const pq = new PriorityQueue();
   * pq.enqueue(2, 'b');
   * pq.enqueue(5, 'a');
   * pq.dequeue(); // 'a'
   * pq.dequeue(); // 'b'
   * pq.dequeue(); // null
   */
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

  /**
   * Returns the value with the highest priority without removing it.
   * @returns {*} The value with the highest priority, or `null` if the queue is empty.
   *
   * @example
   * const pq = new PriorityQueue();
   * pq.enqueue(3, 'task');
   * pq.top();  // 'task'
   * pq.size(); // 1 (not removed)
   */
  top() {
    return this.empty() ? null : this.#heap[0].value;
  }

  /**
   * Returns the number of elements in the queue.
   * @returns {number} The current size of the queue.
   *
   * @example
   * const pq = new PriorityQueue();
   * pq.size(); // 0
   * pq.enqueue(1, 'a');
   * pq.enqueue(2, 'b');
   * pq.size(); // 2
   */
  size() {
    return this.#heap.length;
  }

  /**
   * Checks whether the queue contains no elements.
   * @returns {boolean} `true` if the queue is empty, otherwise `false`.
   *
   * @example
   * const pq = new PriorityQueue();
   * pq.empty(); // true
   * pq.enqueue(1, 'a');
   * pq.empty(); // false
   */
  empty() {
    return this.#heap.length === 0;
  }

  /**
   * Restores the heap property by moving the last inserted element upward
   * until its parent has greater or equal priority.
   * @private
   */
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

  /**
   * Restores the heap property by moving the root element downward,
   * swapping with the higher-priority child until the heap is valid.
   * @private
   */
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

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = [];
  for (let j = 0; j < N; j++) {
    A[i][j] = -1;
  }
}

const pq = new PriorityQueue();

pq.enqueue(0, [0, 0, 0]);

while (!pq.empty()) {
  const [i, j, v] = pq.dequeue();
  if (A[i][j] !== -1) continue;
  A[i][j] = v;
  for (const [di, dj] of D) {
    const ni = i + di;
    const nj = j + dj;
    const nv = v + 1;
    if (ni < 0 || ni >= N || nj < 0 || nj >= N) continue;
    if (A[ni][nj] !== -1) continue;
    pq.enqueue(-nv, [ni, nj, nv]);
  }
}

for (let i = 0; i < N; i++) {
  console.log(A[i].join(' '));
}
