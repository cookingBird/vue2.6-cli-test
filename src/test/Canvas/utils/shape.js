import * as Ctx from './context';
export function line(context, callback) {
  Ctx.sandboxCtx(context, () => {
    context.beginPath();
    context.strokeStyle = '#ff0000';
    callback && callback();
    context.stroke();
  });
}

export function rect(context, callback) {
  Ctx.sandboxCtx(context, () => {
    context.fillStyle = 'rgba(150,100,0,0.3)';
    callback ? callback() : context.lineTo(160, 160);
    context.fill();
  });
}

export function shape(context, callback, styleCb, type = 'fill') {
  Ctx.sandboxCtx(context, () => {
    // 填充三角形
    context.fillStyle = 'rgba(0,111,10)';
    context.strokeStyle = 'rgba(0,0,222)';
    styleCb && styleCb();
    context.beginPath();
    callback && callback(context);
    context.closePath();
    //填充
    if (type === 'fill') {
      context.fill();
    }
    // 描边
    if (type === 'stroke') {
      context.stroke();
    }
  });
}
