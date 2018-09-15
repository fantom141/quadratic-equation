module.exports = function solveEquation(equation) {
    const a = eval(equation.match(/\-?\s*\d+\s*\*?\s*x\s*\^\s*2/)[0].match(/\-?\s*\d+/)[0]);
    const b = eval(equation.match(/[\-?\+?]\s*\d+\s*\*?\s*x[^\^]/)[0].match(/\-?\s*\d+/)[0]);
    const c = eval(equation.match(/[\-?\+?]\s*\d+$/)[0].match(/\-?\s*\d+/)[0]);

    const D = Math.pow(b, 2) - 4 * a * c;

    const x1 = Math.round((-b - Math.pow(D, 0.5)) / (2 * a));
    const x2 = Math.round((-b + Math.pow(D, 0.5)) / (2 * a));

    return [x1, x2].sort((a, b) => a - b);
}
