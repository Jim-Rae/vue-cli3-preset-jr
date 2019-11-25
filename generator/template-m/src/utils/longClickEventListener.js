/*!
 * @Author: Jim Rae
 * @Time: 2019-11-19
 * @Last Modified by: Jim Rae
 * @Last Modified Time: 2019-11-25
 * @Dec: 长按事件监听
 */

export default class LCEvent {
  // 定时器
  _timer = 0;
  // 长按标志
  _isLongClick = false;
  // 长按事件队列
  _lCHandlers = [];
  // 点击事件队列
  _cHandlers = [];

  constructor (target, threshold = 500) {
    // 目标元素
    this.target = target;
    // 长按阈值，单位ms
    this.threshold = threshold;
    // 添加事件
    this._registerEvents();
  }

  // 添加长按事件处理函数
  addLCHandler (handler) {
    this._lCHandlers.push(handler);
    return this;
  }

  // 添加点击事件处理函数
  addCHandler (handler) {
    this._cHandlers.push(handler);
    return this;
  }

  // 移除长按事件处理函数
  removeLCHandler (handler) {
    return this._removeHandler(this._lCHandlers, handler);
  }
  // 移除点击事件处理函数
  removeCHandler (handler) {
    return this._removeHandler(this._cHandlers, handler);
  }

  // 绑定原生事件
  _registerEvents () {
    this._registerEvent(this.target, 'touchstart', this._touchStartEventHandler);
    this._registerEvent(this.target, 'touchmove', this._touchMoveEventHandler);
    this._registerEvent(this.target, 'touchend', this._touchEndEventHandler);
  }

  // 移除原生事件
  _removeEvents () {
    this._removeEvent(this.target, 'touchstart', this._touchStartEventHandler);
    this._removeEvent(this.target, 'touchmove', this._touchMoveEventHandler);
    this._removeEvent(this.target, 'touchend', this._touchEndEventHandler);
  }

  // touchstart事件处理函数
  _touchStartEventHandler = (e) => {
    this._isLongClick = false;
    this._timer = setTimeout(() => {
      // 此处为长按事件处理
      this._isLongClick = true;
      this._lCHandlers.forEach(handler => {
        handler(e);
      })
      this._isLongClick = false;
    }, this.threshold);
  }

  // touchmove事件处理函数
  _touchMoveEventHandler = () => {
    // 鼠标或手指移动则不算长按
    this._clearTimer();
  }

  // touchend事件处理函数
  _touchEndEventHandler = (e) => {
    this._clearTimer();
    if (!this._isLongClick) {
      // 点击时间未超过长按阈值，判断为点击事件
      this._cHandlers.forEach(handler => {
        handler(e);
      });
    }
  }

  // 清空计时器
  _clearTimer () {
    this._timer && clearTimeout(this._timer);
    this._timer = 0;
  }

  // 清空回调队列
  _removeHandler (handlerList, handler) {
    if (handler) {
      // 有传handler，移除指定处理函数
      const index = handlerList.indexOf(handler);
      if (index !== -1) {
        handlerList.splice(index, 1);
      }
    } else {
      // 没传handler，直接清空所有事件队列
      handlerList = [];
      // 若长按事件队列和点击事件队列为空，则直接移除原生事件
      if (this._cHandlers.length === 0 && this._lCHandlers.length === 0) {
        this._removeEvents();
      }
    }
    return this;
  }

  // 兼容的方式绑定事件
  _registerEvent (target, type, handler) {
    if (target.addEventListener) {
      target.addEventListener(type, handler);
    } else if (target.attachEvent) {
      // 兼容低版本ie
      target.attachEvent('on' + type, handler);
    } else {
      target['on' + type] = handler;
    }
  }

  // 兼容的方式解绑事件
  _removeEvent (target, type, handler) {
    if (target.removeEventListener) {
      target.removeEventListener(type, handler);
    } else if (target.detachEvent) {
      // 兼容低版本ie
      target.detachEvent('on' + type, handler);
    } else {
      target['on' + type] = null;
    }
  }
}
