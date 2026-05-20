const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1] + '..';
const T = input[2] + '..';

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
const map = {};

q.enqueue(S);
map[S] = 0;

while (!q.empty()) {
  const a = q.dequeue();
  let j = 0;
  while (a[j] !== '.') j++;
  for (let i = 0; i < N + 1; i++) {
    if (a[i] === '.' || a[i + 1] === '.') continue;
    let b = [...a];
    [b[i], b[i + 1], b[j], b[j + 1]] = [b[j], b[j + 1], b[i], b[i + 1]];
    b = b.join('');
    if (map[b] !== undefined) continue;
    map[b] = map[a] + 1;
    q.enqueue(b);
  }
}

console.log(map[T] !== undefined ? map[T] : -1);
