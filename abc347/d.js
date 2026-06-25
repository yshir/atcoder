const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [a, b, c] = input[0].split(' ');
a = Number(a);
b = Number(b);
c = BigInt(c);

const c_bits = (() => {
  let cur = c;
  let cnt = 0;
  while (cur > 0n) {
    if ((cur & 1n) === 1n) {
      cnt += 1;
    }
    cur >>= 1n;
  }
  return cnt;
})();

const ab_bits = a + b;
const tt_bits = (ab_bits - c_bits) / 2;
const a_bits = a - tt_bits;
const b_bits = b - tt_bits;

if (ab_bits < c_bits || (ab_bits - c_bits) % 2 === 1 || a_bits < 0 || b_bits < 0) {
  console.log('-1');
  return;
}

const xnor_stack = [];
for (let i = 0; i < 100; i++) xnor_stack.push([0n, 0n]);
for (let i = 0; i < tt_bits; i++) xnor_stack.push([1n, 1n]);

const xor_stack = [];
for (let i = 0; i < a_bits; i++) xor_stack.push([1n, 0n]);
for (let i = 0; i < b_bits; i++) xor_stack.push([0n, 1n]);

let x = 0n;
let y = 0n;

for (let i = 0n; i < 100n; i += 1n) {
  const [dx, dy] = (((c >> i) & 1n) === 1n ? xor_stack : xnor_stack).pop();
  x += dx << i;
  y += dy << i;
}

if (x < 2n ** 60n && y < 2n ** 60n) {
  console.log([x, y].join(' '));
} else {
  console.log(-1);
}
