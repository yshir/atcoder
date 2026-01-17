const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1];
const T = input[2];
const [Q] = input[3].split(' ').map(Number);

for (let i = 0; i < Q; i++) {
  const w = input[i + 4];

  let s_ok = true;
  let t_ok = true;
  for (let j = 0; j < w.length; j++) {
    if (!S.includes(w[j])) s_ok = false;
    if (!T.includes(w[j])) t_ok = false;
  }

  if (s_ok && !t_ok) {
    console.log('Takahashi');
    continue;
  }
  if (!s_ok && t_ok) {
    console.log('Aoki');
    continue;
  }
  console.log('Unknown');
}
