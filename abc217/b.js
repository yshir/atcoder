const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const s1 = input[0];
const s2 = input[1];
const s3 = input[2];

const set = new Set(['ABC', 'ARC', 'AGC', 'AHC']);

set.delete(s1);
set.delete(s2);
set.delete(s3);

console.log([...set][0]);
