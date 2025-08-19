const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C, X, Y] = input[0].split(' ').map(Number);

let min = Number.MAX_VALUE;

// AB ピザを買う枚数を i とする
for (let i = 0; i <= Math.max(X * 2, Y * 2); i++) {
  min = Math.min(min, C * i + A * Math.ceil(Math.max(X - i / 2, 0)) + B * Math.ceil(Math.max(Y - i / 2, 0)));
}

console.log(min);
