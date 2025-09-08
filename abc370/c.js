const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let S = input[0];
let T = input[1];

const X = [];
while (S !== T) {
  const c = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i]) {
      const ss = [...S];
      ss[i] = T[i];
      c.push(ss.join(''));
    }
  }
  if (c.length === 0) break;

  const ss = c.sort()[0];
  X.push(ss);
  S = ss;
}

console.log(X.length);
for (let i = 0; i < X.length; i++) {
  console.log(X[i]);
}
