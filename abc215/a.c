#include <stdio.h>
#include <string.h>
typedef long long ll;

int main() {
  char S[16];
  scanf("%s", S);
  if (strcmp(S, "Hello,World!") == 0) {
    printf("AC");
  } else {
    printf("WA");
  }

  printf("\n");
  return 0;
}
