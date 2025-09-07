const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const S = [...input[1]];

const check = (i) => {
  if (i < 0 || i + 1 < 0 || i + 2 < 0 || i > N - 1 || i + 1 > N - 1 || i + 2 > N - 1) {
    return false;
  }
  return S[i] + S[i + 1] + S[i + 2] === 'ABC';
};

let cnt = 0;
for (let i = 0; i < N; i++) {
  if (check(i)) cnt++;
}

for (let i = 0; i < Q; i++) {
  let [X, C] = input[i + 2].split(' ');
  X = Number(X) - 1;

  // before
  if (check(X - 2)) cnt--;
  if (check(X - 1)) cnt--;
  if (check(X - 0)) cnt--;

  S[X] = C;

  // after
  if (check(X - 2)) cnt++;
  if (check(X - 1)) cnt++;
  if (check(X - 0)) cnt++;

  console.log(cnt);
}
