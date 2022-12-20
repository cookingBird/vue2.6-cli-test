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
    value: Number,
  },
  data() {
    return {
      timestamp: Date.now(),
    };
  },
  render(h) {
    if (this.options.html) {
      return h(this.options.type ? this.options.type : 'div', {
        class: this.options.class,
        style: this.options.style,
        attrs: {
          ...expectKeys(this.options, 'src', 'alt', 'name'),
        },
        domProps: {
          innerHTML: this.options.html,
        },
        on: {
          ...Object.assign({}, this.options.listeners),
          ...Object.assign(
            {},
            Object.keys(this.options.events || {}).reduce((pre, key) => {
              return {
                ...pre,
                [key]: () => {
                  this.$emit(this.options.events[key]);
                },
              };
            }, {})
          ),
        },
      });
    } else {
      return h(
        this.options.type ? this.options.type : 'div',
        {
          class: this.options.class,
          style: this.options.style,
          attrs: {
            ...expectKeys(this.options, 'src', 'alt', 'name'),
          },
          on: {
            ...Object.assign({}, this.options.listeners),
            ...Object.assign(
              {},
              Object.keys(this.options.events || {}).reduce((pre, key) => {
                return {
                  ...pre,
                  [key]: () => {
                    this.$emit(this.options.events[key]);
                  },
                };
              }, {})
            ),
          },
        },
        this.renderEl(h, this.options.children)?.concat(
          this.$slots.default ? this.$slots.default : ''
        )
      );
    }
  },
  methods: {
    renderEl(h, children) {
      return children?.map((child) => {
        if (child.html) {
          return h(child.type ? child.type : 'div', {
            class: child.class,
            style: child.style,
            attrs: {
              ...expectKeys(child, 'src', 'alt', 'name'),
            },
            domProps: {
              innerHTML: child.html,
            },
            on: {
              ...Object.assign({}, child.listeners),
              ...Object.assign(
                {},
                Object.keys(child.events || {}).reduce((pre, key) => {
                  return {
                    ...pre,
                    [key]: () => {
                      this.$emit(child.events[key]);
                    },
                  };
                }, {})
              ),
            },
          });
        } else {
          return h(
            child.type ? child.type : 'div',
            {
              class: child.class,
              style: child.style,
              attrs: {
                ...expectKeys(child, 'src', 'alt', 'name'),
              },
              on: {
                ...Object.assign({}, child.listeners),
                ...Object.assign(
                  {},
                  Object.keys(child.events || {}).reduce((pre, key) => {
                    return {
                      ...pre,
                      [key]: () => {
                        this.$emit(child.events[key]);
                      },
                    };
                  }, {})
                ),
              },
            },
            child.slot && child.slotName && this.$scopedSlots[child.slotName]
              ? this.$scopedSlots[child.slotName](this.$props)
              : child.slot && !child.slotName
              ? '子节点的slotName不能为空'
              : child.children
              ? child.children.map((child) => this.renderEl(h, child))
              : child.content
          );
        }
      });
    },
  },
};

//default2
export const Default2 = {
  props: {
    options: {
      type: Object,
    },
  },
  render(h) {
    return renderEl(h, this.options, this);
  },
};

//normal
export const Test = {
  props: {
    options: {
      type: Object,
    },
    value: Number,
  },
  render(h) {
    return h('div', {}, ['test1: ', this.value]);
  },
};
//default slots
export const TestDefaultSlot = {
  props: {
    options: {
      type: Object,
    },
    value: Number,
  },
  render(h) {
    return h('div', {}, this.$slots.default);
  },
};
//default scopeSlot
export const TestScopeDefaultSlot = {
  props: {
    options: {
      type: Object,
    },
    value: Number,
  },
  render(h) {
    return h('div', {}, this.$scopedSlots.default());
  },
};
