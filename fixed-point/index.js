const bisection = require('../bisection');
const { pow } = Math;

function fixedPoint(f, initial1, initial2, epsilon = 1e-7) {
  const g = x => x - f(x);
  return bisection(g, initial1, initial2, epsilon);
}

function f(x) {
  return pow(x, 2) / 2 - 1;
}

console.log(fixedPoint(f, -1, 0));