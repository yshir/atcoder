const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X] = input[0].split(' ').map(Number);

const S = [...'HelloWorld'];
S[X - 1] = '_';
console.log(S.filter((x) => x !== '_').join(''));
