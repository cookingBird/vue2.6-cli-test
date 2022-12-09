export function sandboxCtx(context, callback) {
  context.save();
  callback && callback(context);
  context.restore();
  return (cb) => {
    context.save();
    callback && callback(context);
    cb && cb(context);
    context.restore();
  };
}

export function getContextDrawer(context, cb) {
  return (resolve) => {
    sandboxCtx(context, (context) => {
      cb && cb(context);
      resolve && resolve(context);
    });
  };
}
