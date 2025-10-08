const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, M] = input[0].split(' ').map(Number);

const f = (tick = 0) => {
  let m = M + tick;
  let h = H;
  if (m >= 60) {
    h += Math.floor(m / 60);
    m = m % 60;
  }
  if (h >= 24) {
    h = h % 24;
  }

  const a = Math.floor(h / 10);
  const b = h % 10;
  const c = Math.floor(m / 10);
  const d = m % 10;

  const na = a;
  const nb = c;
  const nc = b;
  const nd = d;

  const nh = na * 10 + nb;
  const nm = nc * 10 + nd;
  if (0 <= nh && nh <= 23 && 0 <= nm && nm <= 59) {
    console.log([h, m].join(' '));
    return true;
  }
  return false;
};

for (let i = 0; i < 1000; i++) {
  if (f(i)) {
    return;
  }
}
