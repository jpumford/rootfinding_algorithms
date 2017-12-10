const { abs, pow } = Math;

function steffensen(f, initialx = 1, epsilon = 1e-7) {
  const finitialx = f(initialx);
  if (abs(finitialx) <= epsilon) return initialx;
  const ginitialx = (f(initialx + finitialx)/finitialx) - 1;
  const nextx = initialx - (finitialx/ginitialx);
  return steffensen(f, nextx, epsilon);
}

module.exports = steffensen;