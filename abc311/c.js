const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const seen = new Set([1]);
const path = [1];
while (true) {
  const last = path[path.length - 1];
  const next = A[last - 1];
  if (seen.has(next)) {
    const ans = path.slice(path.indexOf(next));
    console.log(ans.length);
    console.log(ans.join(' '));
    return;
  } else {
    seen.add(next);
    path.push(next);
  }
}
