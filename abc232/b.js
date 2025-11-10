const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const alpha = 'abcdefghijklmnopqrstuvwxyz';

const S = input[0].split('').map((x) => alpha.indexOf(x));
const T = input[1].split('').map((x) => alpha.indexOf(x));

const d = (S[0] - T[0] + alpha.length) % alpha.length;
for (let i = 0; i < S.length; i++) {
  if ((S[i] - T[i] + alpha.length) % alpha.length !== d) {
    console.log('No');
    return;
  }
}
console.log('Yes');
