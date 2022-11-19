function RainBowColor (length,maxLength) {
	var i = (length * 255 / maxLength);
	var r = Math.round(Math.sin(0.024 * i + 0) * 127 + 128);
	var g = Math.round(Math.sin(0.024 * i + 2) * 127 + 128);
	var b = Math.round(Math.sin(0.024 * i + 4) * 127 + 128);
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

console.log("rgb(107,251,47)");
console.log(RainBowColor(10,10))
