const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
  }

  push(item) {
    this.data.push(item);
  }

  front() {
    return this.data[this.head];
  }

  pop() {
    this.head++;
  }

  isEmpty() {
    return this.head >= this.data.length;
  }
}

for (let i = 0; i < T; i++) {
  const [N] = input[i * 2 + 1].split(' ').map(Number);
  const S = input[i * 2 + 2].split(' ').map(Number);

  const queue = new Queue();
  queue.push([0]);
  let ans = -1;
  while (!queue.isEmpty()) {
    const domino = queue.front();
    queue.pop();
    if (S[domino[domino.length - 1]] * 2 >= S[N - 1]) {
      ans = domino.length + 1;
      break;
    }

    let max = 0;
    let max_j = 0;
    for (let j = 1; j < N - 1; j++) {
      const tail = domino[domino.length - 1];
      if (!domino.includes(j) && S[tail] * 2 >= S[j] && S[tail] < S[j]) {
        if (max < S[j]) {
          max = S[j];
          max_j = j;
        }
      }
    }
    if (max_j > 0) {
      queue.push([...domino, max_j]);
    }
  }
  console.log(ans);
}
