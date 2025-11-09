const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c] = input[0].split('');

console.log(Number(a + b + c) + Number(b + c + a) + Number(c + a + b));
