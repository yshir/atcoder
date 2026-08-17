const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, K] = input[0].split(' ');
K = Number(K);

const _8_to_10 = (a) => {
  let b = 0n;
  for (let i = 0; i < a.length; i++) {
    b += BigInt(a[a.length - 1 - i]) * 8n ** BigInt(i);
  }
  return b;
};

const _10_to_9 = (a) => {
  let b = '';
  while (a > 0n) {
    b = String(a % 9n) + b;
    a /= 9n;
  }
  return b;
};

const _8_to_9 = (a) => _10_to_9(_8_to_10(a));

if (N !== '0') {
  while (K--) {
    N = _8_to_9(N).replaceAll('8', '5');
  }
}

console.log(N);
