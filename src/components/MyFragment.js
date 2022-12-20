function exceptKeys(source, ...keys) {
  return Object.keys(source).reduce((pre, cur) => {
    if (keys.includes(cur)) {
      return pre;
    }
    return {
      ...pre,
      [cur]: source[cur],
    };
  }, {});
}
function renderFunctionalEl(h, options, ctx) {
  return h(
    options.type ? options.type : 'div',
    {
      class: options.class,
      style: options.style,
      attrs: options.attrs,
      on: {
        ...Object.assign({}, options.listeners),
        ...Object.assign(
          {},
          Object.keys(options.events || {}).reduce((pre, key) => {
            return {
              ...pre,
              [key]: () => {
                ctx.$emit(options.events[key]);
              },
            };
          }, {})
        ),
      },
    },
    options.slot && options.slotName
      ? ctx.$scopedSlots[options.slotName](ctx.$data)
      : options.content
      ? options.content
      : options?.children?.map((child) => renderFunctionalEl(h, child, ctx))
  );
}
function expectKeys(source, ...keys) {
  if (!keys?.length) return source;
  return keys.reduce(
    (pre, cur) => ({
      ...pre,
      [cur]: source[cur],
    }),
    {}
  );
}

function renderEl(h, options, ctx, isFirst = true) {
  if (options.html) {
    return h(options.type ? options.type : 'div', {
      class: options.class,
      style: options.style,
      attrs: {
        ...expectKeys(options, 'src', 'alt', 'name'),
      },
      on: {
        ...Object.assign({}, options.listeners),
        ...Object.assign(
          {},
          Object.keys(options.events || {}).reduce((pre, key) => {
            return {
              ...pre,
              [key]: () => {
                ctx.$emit(options.events[key]);
              },
            };
          }, {})
        ),
      },
    });
  } else {
    return h(
      options.type ? options.type : 'div',
      {
        class: options.class,
        style: options.style,
        attrs: {
          ...expectKeys(options, 'src', 'alt', 'name'),
        },
        on: {
          ...Object.assign({}, options.listeners),
          ...Object.assign(
            {},
            Object.keys(options.events || {}).reduce((pre, key) => {
              return {
                ...pre,
                [key]: () => {
                  ctx.$emit(options.events[key]);
                },
              };
            }, {})
          ),
        },
      },
      options.slot && options.slotName && ctx.$scopedSlots[options.slotName]
        ? isFirst
          ? ctx.$scopedSlots[options.slotName](ctx.$data).concat(ctx.$slots.default)
          : ctx.$scopedSlots[options.slotName](ctx.$data)
        : options.slot && !options.slotName
        ? isFirst
          ? this.$slots.default
          : '子节点必须包含slotName属性'
        : options.children
        ? isFirst
          ? options.children
              .map((child) => renderEl(h, child, ctx, false))
              .concat(ctx.$slots.default)
          : options.children.map((child) => renderEl(h, child, ctx, false))
        : options.content
        ? isFirst
          ? [options.content].concat(this.$slots.default)
          : options.content
        : null
    );
  }
}
export default {
  // functional: true,
  props: {
    options: {
      type: Object,
    },
  },
  render(h) {
    return renderEl(h, this.options, this);
  },
};
