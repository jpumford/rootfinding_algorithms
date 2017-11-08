const { abs, pow } = Math;

function newton(f, df, initialx = 1, epsilon = 1e-7) {
  const finitialx = f(initialx);
  if (abs(finitialx) <= epsilon) return initialx;
  const nextx = initialx - finitialx / df(initialx);
  return newton(f, df, nextx, epsilon);
}

module.exports = newton;