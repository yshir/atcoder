const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const H = []; // Hole to Bag
const B = []; // Bag to Hole
const P = []; // Pigeon to Bag
for (let i = 0; i <= N; i++) {
  H[i] = i;
  B[i] = i;
  P[i] = i;
}

for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ').map(Number);
  if (query[0] === 1) {
    let [, a, b] = query;
    P[a] = H[b];
  }
  if (query[0] === 2) {
    let [, a, b] = query;
    const bag_a = H[a];
    const bag_b = H[b];
    [B[bag_a], B[bag_b], H[a], H[b]] = [B[bag_b], B[bag_a], H[b], H[a]];
  }
  if (query[0] === 3) {
    let [, a] = query;
    console.log(B[P[a]]);
  }
}
