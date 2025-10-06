const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
const T = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1];
  T[i] = input[i + 1 + H];
}

const U = [];
const V = [];
for (let i = 0; i < W; i++) {
  U[i] = '';
  V[i] = '';
  for (let j = 0; j < H; j++) {
    U[i] += S[j][i];
    V[i] += T[j][i];
  }
}

const V_map = {};
for (let i = 0; i < W; i++) {
  V_map[V[i]] = (V_map[V[i]] || 0) + 1;
}

let ok = true;
for (let i = 0; i < W; i++) {
  if (V_map[U[i]] === undefined) {
    ok = false;
    break;
  }
  V_map[U[i]]--;
  if (V_map[U[i]] < 0) {
    ok = false;
    break;
  }
}
console.log(ok ? 'Yes' : 'No');
