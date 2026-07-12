const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const stack = [];
for (let i = 0; i < S.length; i++) {
  stack.push(S[i]);
  while (
    stack.length >= 3 &&
    stack[stack.length - 3] === 'A' &&
    stack[stack.length - 2] === 'B' &&
    stack[stack.length - 1] === 'C' //
  ) {
    stack.pop();
    stack.pop();
    stack.pop();
  }
}
console.log(stack.join(''));
