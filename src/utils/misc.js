/**@description 设置一个ctx中的某些字段值，支持.访问符 */
export function getCtxValueSetter(ctx, filedLike) {
	const fileds = filedLike.split('.');
	const length = fileds.length;
	return value => {
		let context = ctx;
		fileds.forEach((key, index) => {
			if (index < length - 1) {
				context = context[key];
			} else {
				context[key] = value;
			}
		});
	};
}

/**@description 获取一个ctx中的某一字段值，支持.访问符 */
export function getCtxValue(ctx, filedLike) {
	const fileds = filedLike.split('.');
	let val = ctx;
	fileds.forEach((key, index) => {
		if (index < fileds.length - 1) {
			val = (val[key] || this.$set(val, key, {}));
		} else {
			val = val[key] || this.$set(val, key, '');
		}
	});
	return val;
}
