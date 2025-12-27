const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const stack = [];

for (let i = 0; i < N; i++) {
  const a = stack[stack.length - 3] || 'A';
  const b = stack[stack.length - 2] || 'B';
  const c = stack[stack.length - 1] || 'C';
  const d = A[i];
  if (a === b && a === c && a === d) {
    stack.pop();
    stack.pop();
    stack.pop();
  } else {
    stack.push(d);
  }
}

console.log(stack.length);
