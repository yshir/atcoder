const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

console.log(/^(dream|dreamer|erase|eraser)*$/.test(S) ? 'YES' : 'NO');
