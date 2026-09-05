const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const set = new Set();
const stack = [[]];

for (let i = 0; i < S.length; i++) {
  if (S[i] === '(') {
    stack.push([]);
  } else if (S[i] === ')') {
    const chars = stack.pop();
    for (const c of chars) set.delete(c);
  } else {
    if (set.has(S[i])) {
      console.log('No');
      return;
    }
    stack[stack.length - 1].push(S[i]);
    set.add(S[i]);
  }
}

console.log('Yes');
