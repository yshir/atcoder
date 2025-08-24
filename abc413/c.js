const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);
const query = [];
for (let i = 0; i < Q; i++) query[i] = input[i + 1].split(' ').map(Number);

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
}

const A = new Queue();
for (let i = 0; i < Q; i++) {
  if (query[i][0] === 1) {
    const [_, c, x] = query[i];
    A.push([x, c]);
    continue;
  }

  let [_, k] = query[i];
  let sum = BigInt(0);
  while (k > 0) {
    const [x, c] = A.front();
    if (c > k) {
      sum += BigInt(k) * BigInt(x);
      A.data[A.head] = [x, c - k];
      k = 0;
    } else {
      sum += BigInt(c) * BigInt(x);
      A.pop();
      k -= c;
    }
  }
  console.log(String(sum));
}
