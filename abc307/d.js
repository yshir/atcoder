const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let cnt = 0;
const stack = [];

for (let i = 0; i < N; i++) {
  if (S[i] === ')') {
    if (cnt > 0) {
      cnt--;
      while (1) {
        const c = stack.pop();
        if (c === '(') break;
      }
      continue;
    }
  }

  if (S[i] === '(') {
    cnt++;
  }

  stack.push(S[i]);
}

console.log(stack.join(''));
