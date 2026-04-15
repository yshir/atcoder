const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const ans = [];

const dfs = (stack) => {
  if (stack.length === N) {
    ans.push(stack.join(' '));
    return;
  }

  for (let i = stack.length > 0 ? stack[stack.length - 1] + 10 : 1; ; i++) {
    const remainSum = (N - stack.length - 1) * 10;
    if (remainSum + i > M) break;
    dfs([...stack, i]);
  }
};

dfs([]);

console.log(ans.length);
console.log(ans.join('\n'));
