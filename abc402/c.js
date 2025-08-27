const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < M; i++) {
  const [, ...a] = input[i + 1].split(' ').map(Number);
  A[i] = a;
}

const B = input[1 + M].split(' ').map(Number);

// Food to Menu
const C = [];
for (let i = 0; i < N; i++) {
  C[i] = [];
}
for (let i = 0; i < M; i++) {
  for (const a of A[i]) {
    C[a - 1].push(i);
  }
}

// Menu food count
const D = [];
for (let i = 0; i < M; i++) {
  D[i] = A[i].length;
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  const menus = C[B[i] - 1];
  for (const menu of menus) {
    if (D[menu] > 0) {
      D[menu]--;
      if (D[menu] === 0) {
        cnt++;
      }
    }
  }
  console.log(cnt);
}
