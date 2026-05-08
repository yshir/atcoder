const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);

const ans = [];
const stack = [];

for (let i = 0; i < N; i++) {
  ans.push(stack.length);
  while (stack.length > 0 && stack[stack.length - 1] < H[N - i - 1]) {
    stack.pop();
  }
  stack.push(H[N - i - 1]);
}

console.log(ans.reverse().join(' '));
