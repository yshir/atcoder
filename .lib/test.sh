#!/bin/bash

TRIALS=10000

FILE_GEN="d_gen.js"
FILE_NAIVE="d_naive.js"
FILE_SOLVE="d.js"

mkdir -p ./tmp

for ((i=1; i<=TRIALS; i++))
do
  node $FILE_GEN > ./tmp/in.txt
  node $FILE_NAIVE < ./tmp/in.txt > ./tmp/ok.txt
  node $FILE_SOLVE < ./tmp/in.txt > ./tmp/out.txt

  printf "."
  if (( $i % 100 == 0 )); then echo " ($i/$TRIALS)"; fi

  if ! diff -u ./tmp/ok.txt ./tmp/out.txt > /dev/null; then
    echo ""
    echo "Test #$i failed."
    echo "--- Input ---"
    cat ./tmp/in.txt
    echo "--- Expected ---"
    cat ./tmp/ok.txt
    echo "--- Actual ---"
    cat ./tmp/out.txt

    exit 1
  fi
done

echo ""
echo "All $TRIALS tests passed."
