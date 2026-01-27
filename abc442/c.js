const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const C = [];
for (let i = 0; i < N; i++) {
  C[i] = new Set();
  C[i].add(i);
}

for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  C[a].add(b);
  C[b].add(a);
}

const memo = {};

function permutation(n) {
  if (memo[n]) return memo[n];

  let result = n;
  for (let i = 1; i < 3; i++) {
    result = result * (n - i);
  }
  memo[n] = result;
  return result;
}

function factorial(target) {
  let result = 1;
  for (let i = 0; i < target; i++) {
    let num = i + 1;
    result = result * num;
  }
  return result;
}

const fact = factorial(3);

function combination(n) {
  let numerator = permutation(n);
  let denominator = fact;
  return numerator / denominator;
}

const ans = [];
for (let i = 0; i < N; i++) {
  ans.push(combination(N - C[i].size));
}
console.log(ans.join(' '));
