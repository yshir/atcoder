const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1].trim();
const T = input[2].trim();

if (T.startsWith(S) && T.endsWith(S)) {
  console.log(0);
} else if (T.startsWith(S)) {
  console.log(1);
} else if (T.endsWith(S)) {
  console.log(2);
} else {
  console.log(3);
}
