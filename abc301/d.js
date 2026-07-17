const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0].split('');
const [N] = input[1].split(' ').map(BigInt);

const num = (T) => {
  let x = 0n;
  for (let i = 0; i < T.length; i++) {
    x = x * 2n + BigInt(T[i]);
  }
  return x;
};

const ok = (S) => {
  const T = [...S];
  for (let i = 0; i < T.length; i++) {
    if (T[i] === '?') T[i] = '0';
  }
  return N >= num(T);
};

for (let i = 0; i < S.length; i++) {
  if (S[i] === '?') {
    S[i] = '1';
    if (!ok(S)) S[i] = '0';
  }
}

const T = num(S);

console.log(T <= N ? T.toString() : '-1');
