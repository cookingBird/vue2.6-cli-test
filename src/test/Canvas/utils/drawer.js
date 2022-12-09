import * as Shape from './shape';

export function getLineDrawer(context, callback) {
  return function (...args) {
    Shape.line(context, function () {
      callback && callback();
      if (args.length === 1) {
        args[0](context);
      }
      if (args.length > 1) {
        const points = args;
        for (let index = 0; index < points.length; index += 2) {
          const x = points[index];
          const y = points[index + 1];
          if (index === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }
      }
    });
  };
}

export function getRectDrawer(context, callback) {
  return function (...args) {
    Shape.rect(context, function () {
      callback && callback();
      if (args.length === 1) {
        args[0](context);
      }
      if (args.length === 2) {
        context.fillRect(0, 0, ...args);
      }
      if (args.length === 4) {
        context.fillRect(...args);
      }
    });
  };
}

export function getShapeDrawer(context, styleCallback, type) {
  return function (...args) {
    Shape.shape(
      context,
      function () {
        if (args.length > 1) {
          for (let index = 0; index < args.length; index += 2) {
            const x = args[index];
            const y = args[index + 1];
            context.lineTo(x, y);
          }
        } else {
          args[0] && args[0](context);
        }
      },
      styleCallback,
      type
    );
  };
}
