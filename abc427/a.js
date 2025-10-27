const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const U = [...S];
U.splice(Math.floor(S.length / 2), 1);
console.log(U.join(''));
