export function sandboxCtx(context, callback) {
  context.save();
  callback();
  context.restore();
}

export function translateCtx(context, x, y, callback) {
  sandboxCtx(context, () => {
    context.translate(x, y);
    callback();
  });
}

export function scaleCtx(context, x, y, callback) {
  sandboxCtx(context, () => {
    context.scale(x, y);
    callback();
  });
}

export function line(context, callback) {
  sandboxCtx(context, () => {
    context.beginPath();
    context.moveTo(0, 0);
    context.strokeStyle = '#ff0000';
    callback && callback();
    context.stroke();
  });
}

export function rect(context, callback) {
  sandboxCtx(context, () => {
    context.fillStyle = 'rgba(150,100,0,0.3)';
    callback ? callback() : context.lineTo(160, 160);
    context.fill();
  });
}

export function shape(context, callback, styleCb, type = 'fill') {
  sandboxCtx(context, () => {
    // 填充三角形
    context.fillStyle = 'rgba(111,10,10,0.3)';
    context.strokeStyle = 'rgba(111,222,10,0.3)';
    styleCb && styleCb();
    context.beginPath();
    context.moveTo(0, 0);
    callback && callback(context);
    context.closePath();
    if (type === 'fill') {
      //填充图形
      context.fill();
    } else {
      // 描边三角形
      context.stroke();
    }
  });
}

export function getTranslateContext(context, x = 0, y = 0) {
  return function (callback) {
    translateCtx(context, x, y, callback);
  };
}

export function getLineDrawer(context, callback) {
  return function () {
    const args = arguments;
    line(context, function () {
      callback && callback();
      if (args.length === 1) {
        args[0](context);
      }
      if (args.length > 1) {
        const points = args;
        for (let index = 0; index < points.length; index += 2) {
          const x = points[index];
          const y = points[index + 1];
          context.lineTo(x, y);
        }
      }
    });
  };
}

export function getRectDrawer(context, callback) {
  return function () {
    const args = arguments;
    rect(context, function () {
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

export function getShapeDrawer(context, callback, type) {
  return function () {
    const args = arguments;
    shape(
      context,
      () => {
        for (let index = 0; index < args.length; index += 2) {
          const x = args[index];
          const y = args[index + 1];
          context.lineTo(x, y);
        }
      },
      callback,
      type
    );
  };
}

export function getScaleDrawer(context, x, y) {
  return function (callback) {
    if (!callback) {
      throw Error();
    }
    scaleCtx(context, x, y, callback);
  };
}
