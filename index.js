function soma(lower, upper) {
  sum = 0;
  if (lower < upper) {
    while (lower <= upper) {
      sum += lower;
      lower++;
    }
  } else {
    while (upper <= lower) {
      sum += upper;
      upper++;
    }
  }
  return sum;
}

console.log(soma(1000, 1));
