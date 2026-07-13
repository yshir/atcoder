const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const map = (s) => {
  const a = [];
  for (let i = 0; i < 10; i++) a[i] = 0;
  for (let i = 0; i < s.length; i++) a[Number(s[i])]++;
  return a;
};

const slen = S.length;
const smap = map(S);

let cnt = 0;
for (let n = 0; n * n <= 10 ** N; n++) {
  const nn = String(n * n);
  const nnmap = map(nn);
  const nnlen = nn.length;

  let ok = true;
  if (slen < nnlen) ok = false;
  if (smap[0] < nnmap[0]) ok = false;
  for (let i = 1; i < 10; i++) {
    if (smap[i] !== nnmap[i]) ok = false;
  }
  if (ok) cnt++;
}
console.log(cnt);
