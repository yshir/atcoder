const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [B, R] = input[0].split(' ').map(Number);

console.log((30 - B) * (30 - R));
