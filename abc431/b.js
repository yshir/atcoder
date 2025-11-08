const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let pos = 0;
const [X] = input[pos++].split(' ').map(Number);
const [N] = input[pos++].split(' ').map(Number);
const W = input[pos++].split(' ').map(Number);
const [Q] = input[pos++].split(' ').map(Number);

let ans = X;
const set = new Set();

for (let i = 0; i < Q; i++) {
  let [P] = input[pos++].split(' ').map(Number);
  P--;
  if (set.has(P)) {
    set.delete(P);
    ans -= W[P];
  } else {
    set.add(P);
    ans += W[P];
  }
  console.log(ans);
}
