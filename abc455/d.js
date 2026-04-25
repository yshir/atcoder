const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = i;
}

for (let i = 0; i < Q; i++) {
  let [c, p] = input[i + 1].split(' ').map(Number);
  c--;
  p--;
  G[c] = p;
}

const ans = [];
for (let i = 0; i < N; i++) {
  ans[i] = 0;
}

const H = [];
for (let i = 0; i < N; i++) {
  H[i] = null;
}
for (let i = 0; i < N; i++) {
  if (i !== G[i]) {
    H[G[i]] = i;
  } else {
    ans[i] = 1;
  }
}

for (let i = 0; i < N; i++) {
  if (ans[i] === 0) {
    continue;
  }

  let cnt = 0;
  let cur = H[i];
  while (cur != null) {
    cnt++;
    cur = H[cur];
  }
  ans[i] += cnt;
}

console.log(ans.join(' '));
