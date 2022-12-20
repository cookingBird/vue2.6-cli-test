export default function (rawValue, setCallback) {
  let raw = rawValue;
  function getValue() {
    return raw;
  }
  function setValue(val) {
    if (setCallback === void 0) {
      raw = val;
    } else {
      const result = setCallback(raw, val);
      if (result !== void 0) {
        raw = result;
      }
    }
  }

  return [getValue, setValue];
}
