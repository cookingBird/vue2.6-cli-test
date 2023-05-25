export function bindSlotContext(target = {}, context) {
	return Object.values(target)
		.flat()
		.map(vnode => {
			vnode.context = context;
			return vnode;
		});
}

/**@description 以.访问符设置一个ctx中的某些字段值 */
export function getCtxValueSetter(ctx, filedLike) {
	if (filedLike) {
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
	} else {
		ctx = value;
	}
}

/**@description 以.访问符获取一个ctx中的某一字段值 */
export function getCtxValue(ctx, filedLike) {
	if (filedLike) {
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
	else {
		return ctx;
	}
}
