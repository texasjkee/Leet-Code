const curry = (f) => (...a) => (...b) => f(a, b);

const sum = (a, b) => {
  const _a = a.reduce((acc, curr) => acc + curr, 0);
  const _b = b.reduce((acc, curr) => acc + curr, 0);
  return _a + _b;
};

const calculate = curry(sum);
