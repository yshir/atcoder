const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [ab, ac, bc] = input[0].split(' ');

if (ab === '<' && ac === '>') {
  // c < a < b
  console.log('A');
  return;
}
if (ab === '<' && ac === '<' && bc === '<') {
  // a < b < c
  console.log('B');
  return;
}
if (ab === '<' && ac === '<' && bc === '>') {
  // a < c < b
  console.log('C');
  return;
}

if (ab === '>' && ac === '<') {
  // b < a < c
  console.log('A');
  return;
}
if (ab === '>' && ac === '>' && bc === '<') {
  // b < c < a
  console.log('C');
  return;
}
if (ab === '>' && ac === '>' && bc === '>') {
  // c < b < a
  console.log('B');
  return;
}
