const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [B, G] = input[0].split(' ').map(Number);

console.log(B > G ? 'Bat' : 'Glove');
