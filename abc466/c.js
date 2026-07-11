let i, j, N;
let ans = 0;

function Main(line) {
  const [s] = line.split(' ');
  if (s === 'Yes') {
    ans += j - i;
    j++;
    if (j > N) {
      console.log(`! ${ans}`);
      exitProcess();
    }
    console.log(`? ${i} ${j}`);
    return;
  }
  if (s === 'No') {
    i++;
    if (i === j) j++;
    if (j > N) {
      console.log(`! ${ans}`);
      exitProcess();
    }
    console.log(`? ${i} ${j}`);
    return;
  }

  N = Number(s);
  i = 1;
  j = 2;
  console.log(`? ${i} ${j}`);
}

const readline = require('node:readline');
const rl = readline.createInterface({ input: process.stdin });
const exitProcess = () => {
  process.exit(0);
};
(async () => {
  for await (const line of rl) {
    Main(line.trim());
  }
})();
