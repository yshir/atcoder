const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N] = input[0].split(' ').map(BigInt);

if (N === 1n) {
  console.log(0);
  return;
}

N -= 1n;

let acc = 0n;

for (let i = 1; ; i++) {
  const j = Math.ceil(i / 2);
  const cur = 10n ** BigInt(j - 1) * 9n;
  if (cur + acc < N) {
    acc += cur;
    continue;
  }
  N -= acc;

  let s = '1';
  for (let k = 1; k < j; k++) {
    s += '0';
  }
  s = String(BigInt(s) + N - 1n);

  if (i % 2 === 0) {
    console.log(s + [...s].reverse().join(''));
  } else {
    console.log(s + [...s].reverse().slice(1).join(''));
  }
  break;
}
