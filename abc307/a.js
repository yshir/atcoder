const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const chunk = (a, size) =>
  Array.from(
    { length: Math.ceil(a.length / size) }, //
    (_, i) => a.slice(i * size, i * size + size)
  );

const ans = [];
for (const c of chunk(A, 7)) {
  ans.push(c.reduce((a, b) => a + b, 0));
}
console.log(ans.join(' '));
