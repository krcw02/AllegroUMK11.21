function range(a, b) {
  let res = [];
  if (a > b) {
    for (i = a; i >= b; i--) {
      res.push(i);
    }
  } else {
    for (i = a; i <= b; i++) {
      res.push(i);
    }
  }

  return res;
}

console.log(range(2, 6));
console.log(range(6, 2));
