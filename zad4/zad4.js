function sum(arr) {
  return arr.reduce((sum, e) => {
    return (sum += e);
  }, 0);
}
