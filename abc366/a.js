const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T, A] = input[0].split(' ').map(Number);

console.log(Math.abs(T - A) > N - T - A ? 'Yes' : 'No');
