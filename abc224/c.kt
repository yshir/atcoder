fun main() {
  val (N) = readln().split(" ").map { it.toInt() }

  var P = mutableListOf<List<Long>>()
  for (i in 1..N) {
    P.add(readln().split(" ").map { it.toLong() })
  }
  P.sortBy { it[0] }

  var cnt = 0
  for (i in 0..N-1) {
    for (j in i+1..N-1) {
      for (k in j+1..N-1) {
        val dx1 = P[j][0] - P[i][0]
        var dy1 = P[j][1] - P[i][1]

        var dx2 = P[k][0] - P[j][0]
        var dy2 = P[k][1] - P[j][1]

        if (dy1 * dx2 != dx1 * dy2) {
          cnt++
        }
      }
    }
  }

  println(cnt)
}
