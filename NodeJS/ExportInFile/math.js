let sum = (a, b) => a + b;

let mul = (a, b) => a * b;

let sub = (a, b) => a - b;

let div = (a, b) => a / b;

let mathObj = {
  sum: sum,
  mul: mul,
  sub: sub,
  div: div,
};

module.exports = mathObj; //by default it exports {empty obj}
