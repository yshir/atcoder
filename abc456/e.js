let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let T = input[line++].split(' ').map(Number);

class Queue {
  stackPush = [];
  stackPop = [];

  enqueue(value) {
    this.stackPush.push(value);
  }

  dequeue() {
    if (this.stackPop.length === 0) {
      while (this.stackPush.length > 0) {
        this.stackPop.push(this.stackPush.pop());
      }
    }
    return this.stackPop.pop();
  }

  empty() {
    return this.stackPush.length === 0 && this.stackPop.length === 0;
  }
}

while (T--) {
  const [N, M] = input[line++].split(' ').map(Number);
  const E = [];
  for (let i = 0; i < M; i++) {
    let [u, v] = input[line++].split(' ').map(Number);
    u--;
    v--;
    E[i] = [u, v];
  }
  const W = input[line++].split(' ').map(Number);
  const S = [];
  for (let i = 0; i < N; i++) {
    S[i] = input[line++];
  }

  const G = [];
  for (let i = 0; i < N * W; i++) {
    G[i] = [];
  }
  for (let i = 0; i < W; i++) {
    const ni = (i + 1) % W;

    for (let j = 0; j < N; j++) {
      if (S[j][i] === 'o' && S[j][ni] === 'o') {
        G[j + N * i].push(j + N * ni);
      }
    }

    for (const [u, v] of E) {
      if (S[u][i] === 'o' && S[v][ni] === 'o') {
        G[u + N * i].push(v + N * ni);
      }
      if (S[v][i] === 'o' && S[u][ni] === 'o') {
        G[v + N * i].push(u + N * ni);
      }
    }
  }

  // detect cycle
  const seen = new Set();
  const done = new Set();
  const dfs = (u) => {
    seen.add(u);
    for (const v of G[u]) {
      if (done.has(v)) continue;
      if (seen.has(v)) return true;
      if (dfs(v)) return true;
    }
    done.add(u);
    return false;
  };

  let ok = false;
  for (let i = 0; i < N; i++) {
    if (S[i][0] === 'o') {
      if (dfs(i)) {
        ok = true;
        break;
      }
    }
  }
  console.log(ok ? 'Yes' : 'No');
}
