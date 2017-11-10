const { abs, pow } = Math;

function secant(f, initial1, initial2, epsilon = 1e-7) {
    const finitial1 = f(initial1);
    const finitial2 = f(initial2);
    if (abs(finitial1) <= epsilon) return initial1;
    const secantx = initial2 - (finitial2 * (initial2 - initial1)/(finitial2 - finitial1));
    return secant(f, initial2, secantx, epsilon);
}

module.exports = secant;