let line = 0;
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [Q] = input[line++].split(' ').map(Number);

let id = 1;

const map = {};

while (Q--) {
  const s = input[line++];
  if (map[s] === undefined) {
    map[s] = id++;
  }
  console.log(map[s]);
}
