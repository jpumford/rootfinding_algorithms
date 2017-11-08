const { pow, abs } = Math;

function bisection(f, initial1, initial2, epsilon = 1e-7) {
  if (initial1 > initial2) throw Error('Initial points should be sequential');
  if (initial1 === initial2) throw Error('Initial points must not be the same');
  const finitial1 = f(initial1);
  const finitial2 = f(initial2);
  if (abs(finitial1) <= epsilon) return initial1;
  if (abs(finitial2) <= epsilon) return initial2;
  const finitial1Sign = finitial1 > 0;
  const finitial2Sign = finitial2 > 0;
  if (finitial1Sign === finitial2Sign)
    throw Error('Image of initial points must have opposite signs');
  const midpoint = (initial1 + initial2) / 2;
  if (abs(f(midpoint)) > epsilon) {
    const fmidpoint = f(midpoint);
    const fmidpointSign = fmidpoint > 0;
    if (finitial1Sign === fmidpointSign) return bisection(f, midpoint, initial2, epsilon);
    return bisection(f, initial1, midpoint, epsilon);
  }
  return midpoint;
}

module.exports = bisection;