import useValue from './useValue';
export default function (fn) {
  const fnLength = fn.length; //函数的最小参数长度;
  const [getParams, setParams] = useValue([], function (params, val) {
    params.splice(params.length, 0, val);
  });
  return function rest(param) {
    if (getParams().length === fnLength) {
      fn(...getParams());
    } else {
      setParams(param);
      return rest;
    }
  };
}
