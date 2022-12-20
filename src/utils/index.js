function RainBowColor(length, maxLength, alpha = 1) {
  const i = (length * 255) / maxLength;
  const r = Math.round(Math.sin(0.024 * i + 0) * 127 + 128);
  const g = Math.round(Math.sin(0.024 * i + 2) * 127 + 128);
  const b = Math.round(Math.sin(0.024 * i + 4) * 127 + 128);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

console.log('rgb(107,251,47)');
console.log(RainBowColor(10, 10));
