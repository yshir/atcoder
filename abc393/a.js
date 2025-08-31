const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [s1, s2] = input[0].split(' ');

if (s1 === 'sick' && s2 === 'sick') {
  console.log(1);
}
if (s1 === 'sick' && s2 === 'fine') {
  console.log(2);
}
if (s1 === 'fine' && s2 === 'sick') {
  console.log(3);
}
if (s1 === 'fine' && s2 === 'fine') {
  console.log(4);
}
