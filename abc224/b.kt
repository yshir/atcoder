fun main() {
  val (H, W) = readln().split(" ").map { it.toInt() }

  var A = mutableListOf<List<Int>>()
  for (i in 1..H) {
    A.add(readln().split(" ").map { it.toInt() })
  }

  for (i1 in 0..H-1) {
    for (i2 in i1+1..H-1) {
      for (j1 in 0..W-1) {
        for (j2 in j1+1..W-1) {
          if (A[i1][j1] + A[i2][j2] > A[i2][j1] + A[i1][j2]) {
            println("No")
            return
          }
        }
      }
    }
  }

  println("Yes")
}
