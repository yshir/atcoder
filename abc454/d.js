let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

const f = (S) => {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    stack.push(S[i]);
    if (stack.length > 3) {
      const last = [
        stack[stack.length - 4],
        stack[stack.length - 3],
        stack[stack.length - 2],
        stack[stack.length - 1],
      ].join('');
      if (last === '(xx)') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.push('x');
        stack.push('x');
      }
    }
  }
  return stack.join('');
};

while (T--) {
  const A = input[line++];
  const B = input[line++];

  console.log(f(A) === f(B) ? 'Yes' : 'No');
}
