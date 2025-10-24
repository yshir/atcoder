const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c, d, e] = input[0].split(' ').map(Number);

const map = {};
map[a] = (map[a] || 0) + 1;
map[b] = (map[b] || 0) + 1;
map[c] = (map[c] || 0) + 1;
map[d] = (map[d] || 0) + 1;
map[e] = (map[e] || 0) + 1;

const keys = Object.keys(map);
if (keys.length === 2 && ((map[keys[0]] === 2 && map[keys[1]] === 3) || (map[keys[0]] === 3 && map[keys[1]] === 2))) {
  console.log('Yes');
} else {
  console.log('No');
}
