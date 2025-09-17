const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const T = [...S];

T[T.length - 1] = '4';
console.log(T.join(''));
