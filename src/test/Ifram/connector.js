import { v4 as uuidv4 } from 'uuid';

function addMessageEvent(fn) {
  window.addEventListener('message', (e) => {
    if (e.data.response === false) {
      e.source.postMessage({ ...e.data, response: true }, e.origin);
    }
    fn(e);
  });
  return () => window.removeEventListener('message', fn);
}

export class ConnectChannel {
  // todo 设置目标，设置目标源,代理原生事件响应
  constructor(targetWindow, options = {}) {
    this.target = targetWindow;
    this.targetOrigin = options.targetOrigin || '*';
    this.timeout = options.timeout || 3 * 1000;
    this.tag = options.tag || 'gislife';
    this._waitConnect();
  }
  /**
   * todo 包裹原生消息发生函数，保证消息唯一性,局部性;
   * @description 发送消息
   * @param {object} msg
   */
  _postMessage(msg) {
    if (this.target && this.targetOrigin) {
      let resolveor, rejector;
      const id = uuidv4();
      this.target.postMessage(
        { id, data: msg, belong: this.tag, response: false },
        this.targetOrigin
      );
      const cancel = addMessageEvent(({ data }) => {
        if (data?.id === id && data.belong === this.tag) {
          resolveor(data.data);
          cancel();
        } else {
          setTimeout(() => {
            rejector();
            cancel();
          }, this.timeout);
        }
      });
      return new Promise((resolve, reject) => {
        resolveor = resolve;
        rejector = reject;
      });
    } else {
      console.warn('target or targetOrigin must be required');
      return Promise.reject('missing target or targetOrigin');
    }
  }
  /**
   * @description 设置消息发送对象
   * @param {*} target
   */
  setTarget(target) {
    this.target = target;
  }

  // todo 如果当前targetOrigin未设置，且收到同一connectChannel的消息，自动设置targetOrigin
  _waitConnect() {
    const cancel = addMessageEvent((msg) => {
      if (msg.data.belong === this.tag) {
        this.targetOrigin = this.targetOrigin || msg.origin;
        cancel();
      }
    });
  }

  /**
   * todo 发送消息
   * @description 发送消息
   * @param {function | any} msg 消息体
   * @returns { Promise } 确认消息发送成功的回调
   */
  send(msg) {
    return this._postMessage(msg);
  }
  /**
   * @description 接受消息
   * @param {*} cb 接收到消息的回调函数
   * @returns
   */
  on(cb) {
    return addMessageEvent((msg) => {
      if (msg?.data?.belong === this.tag) {
        cb(msg.data.data);
      }
    });
  }
  /**
   * 销毁连接器
   */
  destory() {
    this._initCancel();
  }
}

/**
 * @description 构造发送配置消息格式
 * @param {*} msg
 * @returns 配置消息格式
 */
function _createCfgMessage(msg) {
  return {
    type: 'config',
    data: msg,
  };
}
/**
 * @description 构造回调消息格式
 * @param {*} cb
 * @returns
 */
function _createFnMsg(cb) {
  if (typeof cb === 'function') {
    return {
      type: 'callback',
      data: cb.toString(),
    };
  } else {
    throw Error('callback message must be function');
  }
}
/**
 * @description ping 通连接的消息
 * @returns
 */
function _createPingMsg() {
  return Date.now();
}
