const H = 8;
const W = 10000;
const Pij = H * W;
console.log([H, W].join(' '));
for (let i = 0; i < H; i++) {
  const Pi = [];
  for (let j = 0; j < W; j++) {
    Pi[j] = Pij;
  }
  console.log(Pi.join(' '));
}
