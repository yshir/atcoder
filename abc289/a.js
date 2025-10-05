const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

console.log(S.replaceAll('0', '2').replaceAll('1', '0').replaceAll('2', '1'));
