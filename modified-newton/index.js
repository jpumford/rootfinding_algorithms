const { abs, pow } = Math;

function modifiedNewton(f, df, ddf, initialx = 1, epsilon = 1e-7) {
  const finitialx = f(initialx);
  if (abs(finitialx) <= epsilon) return initialx;
  const nextx = initialx - (finitialx * df(initialx)) /
        (pow(df(initialx), 2) - (finitialx * ddf(initialx)))
  return modifiedNewton(f, df, ddf, nextx, epsilon);
}

module.exports = modified-newton;