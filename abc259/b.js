const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, d] = input[0].split(' ').map(Number);

const r = Math.sqrt(a ** 2 + b ** 2);
const theta = Math.atan2(b, a) + d * (Math.PI / 180);

const x = r * Math.cos(theta);
const y = r * Math.sin(theta);
console.log([x, y].join(' '));
