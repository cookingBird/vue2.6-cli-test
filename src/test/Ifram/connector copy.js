import { Runner } from './utils';
export class MessageConnector {
  constructor(target, isMain = false) {
    this.queue = new Runner();
    this.target = target;
    this.isConnect = false;
    this.isMain = isMain;
    if (isMain) {
      this.targetOrigin = window.URL_CONFIG.mapUrl;
      if (this.target) {
        this.connect();
      }
    } else {
      this._waitConnect();
    }
    this.handler = (msg) => {
      this.queue.run(msg);
    };
    window.addEventListener('message', this.handler);
  }
  /**
   * @description 发送消息
   * @param {object} msg
   */
  _postMessage(msg) {
    if (this.target && this.targetOrigin) {
      this.target.postMessage({ ...msg }, this.targetOrigin);
    } else {
      throw Error('target or targetOrigin missing');
    }
  }
  /**
   * @description 设置消息发送对象
   * @param {*} target
   */
  setTarget(target) {
    this.target = target;
    setTimeout(() => {
      this.connect();
    });
  }
  /**
   * @description 连接消息发送对象
   */
  connect() {
    this._postMessage(this._createConnectMsg());
    this._connectSuccess();
  }
  /**
   * @description 发送消息
   * @param {function | any} msg 消息体
   * @param {'callback' | 'config'} type 消息类型
   * @returns { Promise } 确认消息发送成功的回调
   */
  send(msg, type = 'callback') {
    if (this.isConnect || this.isMain) {
      if (type === 'callback') {
        this._postMessage(this._createCallbackMsg(msg));
      } else if (type === 'config') {
        this._postMessage(this._createConfigMessage(msg));
      } else {
        this._postMessage(msg);
      }
    } else {
      throw Error('not connected');
    }
  }
  /**
   * @description 接受消息
   * @param {'callback' | 'config' | 'connect' | 'all' } type 接收消息类型
   * @param {*} cb 接收到消息的回调函数
   * @returns
   */
  on(cb, type = 'callback') {
    return this.queue.push((msg) => {
      if (type === 'all') {
        cb(msg);
      }
      if (msg.data.type === type) {
        cb(msg);
      }
    });
  }
  /**
   * 销毁连接器
   */
  destory() {
    window.removeEventListener('message', this.handler);
    this.queue = null;
  }
  /**
   * @description 构造连接消息格式
   * @param {*} msg
   * @returns 连接消息格式
   */
  _createConnectMsg(msg) {
    return {
      type: 'connect',
      source: msg,
      data: msg,
    };
  }
  /**
   * @description 构造发送配置消息格式
   * @param {*} msg
   * @returns 配置消息格式
   */
  _createConfigMessage(msg) {
    return {
      type: 'config',
      source: msg,
      data: msg,
    };
  }
  /**
   * @description 构造回调消息格式
   * @param {*} cb
   * @returns
   */
  _createCallbackMsg(cb) {
    if (/\[object .*Function\]/.test(Object.prototype.toString.call(cb))) {
      return {
        type: 'callback',
        source: cb.toString(),
        data: cb.toString(),
      };
    } else {
      throw Error('callback message must function type');
    }
  }
  /**
   * @description 构造响应消息格式
   * @param {*} data
   * @returns
   */
  _createResponseMsg(data) {
    return {
      ...data,
      type: 'response',
    };
  }
  /**
   * @description 非主应用需等待主应用连接
   */
  _waitConnect() {
    const cancel = this.queue.push((msg) => {
      if (msg.data.type === 'connect') {
        console.log('i know you connected');
        this.targetOrigin = msg.origin;
        cancel();
        this._postMessage({ type: 'connected' });
        this.isConnect = true;
      }
    });
  }
  _connectSuccess() {
    const cancel = this.queue.push((msg) => {
      if (msg.data.type === 'connected') {
        this.isConnect = true;
        cancel();
      }
    });
  }
}
