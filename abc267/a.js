const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const list = {
  Monday: 5,
  Tuesday: 4,
  Wednesday: 3,
  Thursday: 2,
  Friday: 1,
};

console.log(list[S]);
