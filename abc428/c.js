const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

const INF = 10 ** 9;
const stack = [];
let cur = 0;

const push = (v) => {
  stack.push(v);
  cur += v;
};

const pop = () => {
  const v = stack.pop();
  cur -= v;
};

for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ');
  if (query[0] === '1') {
    const [, c] = query;
    if (c === '(') {
      push(1);
    } else {
      if (cur > 0) {
        push(-1);
      } else {
        push(-INF);
      }
    }
  }
  if (query[0] === '2') {
    pop();
  }
  console.log(cur === 0 ? 'Yes' : 'No');
}
