// a is the polynomial coefficient vector
// x is the value to evaluate at
// returns: {polynomial: evaluated polynomial, coefficients: divided coefficient vector}
function horner(a, x) {
  const b = [];
  b[0] = a[0];
  for (let i = 1; i < a.length; i++) {
    b[i] = a[i] + x * b[i - 1];
  }
  return {
    polynomial: b[a.length - 1],
    coefficients: b.slice(0, b.length - 1),
  };
}

module.exports = horner;
