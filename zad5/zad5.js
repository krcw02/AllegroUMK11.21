function fib(a) {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;
  return Math.round((Math.pow(phi, a) - Math.pow(psi, a)) / sqrt5);
}


console.log(fib(40));
