function curry(fn, ...params) {
  return function (...restParams) {
    let allParams = [...params, ...restParams];
    if (allParams.length === fn.length) {
      return fn(...allParams);
    } else {
      return curry(fn, ...allParams);
    }
  };
}

function add(x, y, z) {
  return x + y + z;
}

const rest1 = curry(add, 1, 2);
const restAll = curry(add);
console.log(rest1(3));
console.log(restAll(3, 2, 1));
