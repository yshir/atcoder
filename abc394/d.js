const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const stack = [];

const pair = {
  ')': '(',
  ']': '[',
  '>': '<',
};

for (let i = 0; i < S.length; i++) {
  const c = S[i];

  const pair_c = pair[c];
  if (!pair_c) {
    stack.push(c);
    continue;
  }

  const pop_c = stack.pop();
  if (pop_c !== pair_c) {
    console.log('No');
    return;
  }
}

if (stack.length === 0) {
  console.log('Yes');
} else {
  console.log('No');
}
