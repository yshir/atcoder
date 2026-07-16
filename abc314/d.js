const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
let S = input[1].split('');
const [Q] = input[2].split(' ').map(Number);

let qlast = [-1, 0];
const queries = [];
for (let i = 0; i < Q; i++) {
  let [t, x, c] = input[i + 3].split(' ');
  t = Number(t);
  x = Number(x);
  queries[i] = [t, x, c];
  if (t >= 2) qlast = [i, t];
}

for (let i = 0; i < Q; i++) {
  const [t, x, c] = queries[i];
  if (t === 1) {
    S[x - 1] = c;
  } else if (qlast[0] === i) {
    if (qlast[1] === 2) {
      S = S.map((x) => x.toLowerCase());
    } else {
      S = S.map((x) => x.toUpperCase());
    }
  }
}

console.log(S.join(''));
