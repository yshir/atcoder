const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

console.log(input.reverse().join('\n'));
