#include <stdio.h>
#include <string.h>
#include <math.h>
typedef long long ll;

// scanf("%c");
// scanf("%s");
// scanf("%d");
// scanf("%lld");

int main() {
  ll N;
  scanf("%lld", &N);
  ll k = 0;
  ll cur = 1;
  while (1) {
    cur *= (ll)2;
    if (cur > N) break;
    k++;
  }
  printf("%d\n", k);
  return 0;
}
