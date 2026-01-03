const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const X = input[0].split('').map(Number);

X.sort((a, b) => a - b);
if (X[0] === 0) {
  for (let i = 1; i < X.length; i++) {
    if (X[i] !== 0) {
      [X[0], X[i]] = [X[i], X[0]];
      break;
    }
  }
}
console.log(X.join(''));
