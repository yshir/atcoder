const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

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

let seat = K;
let now = 0;

for (let i = 0; i < N; i++) {
  const [a, b, c] = input[i + 1].split(' ').map(Number);

  // まだ入店時刻になっていなければ時を進める
  if (now < a) {
    now = a;
  }

  // 現在時刻より前に退店時刻がある客をすべて退店させる
  while (!q.empty() && q.top().leave < now) {
    const { cnt } = q.dequeue();
    seat += cnt;
  }

  // 残席数より人数の方が多い場合は客の退店を待つ
  while (seat < c) {
    const { leave, cnt } = q.dequeue();
    seat += cnt;
    now = leave;
  }

  // 席に余裕が出たので入店
  seat -= c;
  const leave = now + b;
  q.enqueue(-leave, { leave, cnt: c });

  console.log(now);
}
