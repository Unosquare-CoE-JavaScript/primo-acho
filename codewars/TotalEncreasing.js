function totalIncDec(x) {
    var t = 1
    for (var i = 1; i <= 9; i += 1) t *= x / i + 1
    return Math.round((20 + x) / 10 * t - 1 - x * 10)
  }