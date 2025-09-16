const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const ss = S.split('.');
console.log(ss[ss.length - 1]);
