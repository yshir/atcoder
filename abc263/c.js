const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const stack = [];
const dfs = (n) => {
  stack.push(n);

  if (stack.length === N + 1) {
    console.log(stack.slice(1).join(' '));
    return;
  }

  for (let i = n + 1; i <= M; i++) {
    dfs(i);
    stack.pop(i);
  }
};

dfs(0);
