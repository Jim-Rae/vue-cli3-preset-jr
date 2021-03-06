/**
 * @Author: Jim Rae
 * @Date: 2019-09-04
 * @Last Modified by: Jim Rae
 * @Last Modified time: 2019-11-25
 * @Desc 常用工具库
 */

import { isArray } from './validator'

/**
 * 计算浏览器默认滚动条宽度
 * @method computeScrollBarWidth
 * @return {Number} 浏览器默认滚动条宽度
 */
const computeScrollBarWidth = () => {
  // 创建一个div来计算浏览器默认滚动条宽度
  const box = document.createElement('div')
  box.style.width = '100px'
  box.style.height = '100px'
  box.style.visibility = 'hidden'
  box.style.position = 'absolute'
  box.style.top = '-9999px'
  box.style.overflow = 'scroll'
  document.body.appendChild(box)

  // 兼容ie, 由于在ie中，如果div里没有内容，clientWidth会为0
  const inner = document.createElement('div')
  inner.style.width = '100%'
  inner.style.height = '200%'
  box.appendChild(inner)

  // 在box没有border的情况下，box.offsetWidth和box.clientWidth的差值就是滚动条宽度
  const scrollBarWidth = box.offsetWidth - box.clientWidth

  box.parentNode.removeChild(box)

  return scrollBarWidth
}

/**
 * 快速深拷贝
 * @method fastCopy
 * @param {Object} obj 需要拷贝的对象
 * @param {Array<String>} keysArr 过滤要拷贝的字段
 */
const fastCopy = (obj, keysArr) => {
  const clone = window.JSON.parse(window.JSON.stringify(obj))
  if (!keysArr) {
    return clone
  }

  const result = {}
  keysArr.forEach(key => {
    result[key] = clone[key]
  })
  return result
}

/**
 * 去除字符串前后的空格
 *
 * @param {string} str 需要操作的字符串
 * @returns {String}
 */
function trim (str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '')
}

/**
 * 遍历一个数组或者一个对象里的所有项去执行某个函数
 *
 * @param {Object|Array} obj 要遍历的数组或者对象
 * @param {Function} fn 每个项需要调用的函数
 */
function forEach (obj, fn) {
  if (obj === null || typeof obj === 'undefined') {
    return
  }

  if (typeof obj !== 'object') {
    obj = [obj]
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn(obj[i], i, obj)
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn(obj[key], key, obj)
      }
    }
  }
}

/**
 * 深合并多个对象
 *
 * @method deepMerge
 * @param {object} obj1 需要合并的对象
 * @returns {object} 合并后的对象
 */
function deepMerge (...params) {
  var result = {}
  function assignValue (val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val)
    } else {
      result[key] = val
    }
  }

  for (var i = 0, l = params.length; i < l; i++) {
    forEach(params[i], assignValue)
  }
  return result
}

/**
 * Date实例转化为YYYY-MM-DD格式，可配置分隔符
 *
 * @method dateToString
 * @param {Date} dateInstance Date实例
 * @param {String} seperator 分隔符
 * @returns {String} 当天日期YYYY-MM-DD
 */
function dateToString (dateInstance, seperator = '-') {
  const year = dateInstance.getFullYear()
  const month = dateInstance.getMonth() + 1
  const date = dateInstance.getDate()
  let yearStr = year.toString()
  let monthStr = ''
  let dateStr = ''
  if (month >= 1 && month <= 9) {
    monthStr = '0' + month
  }
  if (date >= 0 && date <= 9) {
    dateStr = '0' + date
  }
  const currentdate = yearStr + seperator + monthStr + seperator + dateStr
  return currentdate
}

/**
 * Date实例转化为YYYY-MM-DD格式，可配置分隔符
 *
 * @method getWeekNameFromDate
 * @param {Date} date Date实例
 * @param {String} prefix 前缀
 * @returns {String} 周几
 */
function getWeekNameFromDate (date, prefix = '周') {
  return prefix + '日一二三四五六'.charAt(date.getDay())
}

/**
 * 阿拉伯数字转中文数字,
 * 如果传入数字时则最多处理到21位，超过21位js会自动将数字表示成科学计数法，导致精度丢失和处理出错
 * 传入数字字符串则没有限制
 * @param {number|string} digit
 */
function toZhDigit (digit) {
  digit = typeof digit === 'number' ? String(digit) : digit
  const zh = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const unit = ['千', '百', '十', '']
  const quot = ['万', '亿', '兆', '京', '垓', '秭', '穰', '沟', '涧', '正', '载', '极', '恒河沙', '阿僧祗', '那由他', '不可思议', '无量', '大数']

  let breakLen = Math.ceil(digit.length / 4)
  let notBreakSegment = digit.length % 4 || 4
  let segment
  let zeroFlag = []; let allZeroFlag = []
  let result = ''

  while (breakLen > 0) {
    if (!result) { // 第一次执行
      segment = digit.slice(0, notBreakSegment)
      let segmentLen = segment.length
      for (let i = 0; i < segmentLen; i++) {
        if (segment[i] !== 0) {
          if (zeroFlag.length > 0) {
            result += '零' + zh[segment[i]] + unit[4 - segmentLen + i]
            // 判断是否需要加上 quot 单位
            if (i === segmentLen - 1 && breakLen > 1) {
              result += quot[breakLen - 2]
            }
            zeroFlag.length = 0
          } else {
            result += zh[segment[i]] + unit[4 - segmentLen + i]
            if (i === segmentLen - 1 && breakLen > 1) {
              result += quot[breakLen - 2]
            }
          }
        } else {
          // 处理为 0 的情形
          if (segmentLen === 1) {
            result += zh[segment[i]]
            break
          }
          zeroFlag.push(segment[i])
          continue
        }
      }
    } else {
      segment = digit.slice(notBreakSegment, notBreakSegment + 4)
      notBreakSegment += 4

      for (let j = 0; j < segment.length; j++) {
        if (segment[j] !== 0) {
          if (zeroFlag.length > 0) {
            // 第一次执行zeroFlag长度不为0，说明上一个分区最后有0待处理
            if (j === 0) {
              result += quot[breakLen - 1] + zh[segment[j]] + unit[j]
            } else {
              result += '零' + zh[segment[j]] + unit[j]
            }
            zeroFlag.length = 0
          } else {
            result += zh[segment[j]] + unit[j]
          }
          // 判断是否需要加上 quot 单位
          if (j === segment.length - 1 && breakLen > 1) {
            result += quot[breakLen - 2]
          }
        } else {
          // 第一次执行如果zeroFlag长度不为0, 且上一划分不全为0
          if (j === 0 && zeroFlag.length > 0 && allZeroFlag.length === 0) {
            result += quot[breakLen - 1]
            zeroFlag.length = 0
            zeroFlag.push(segment[j])
          } else if (allZeroFlag.length > 0) {
            // 执行到最后
            if (breakLen === 1) {
              result += ''
            } else {
              zeroFlag.length = 0
            }
          } else {
            zeroFlag.push(segment[j])
          }

          if (j === segment.length - 1 && zeroFlag.length === 4 && breakLen !== 1) {
            // 如果执行到末尾
            if (breakLen === 1) {
              allZeroFlag.length = 0
              zeroFlag.length = 0
              result += quot[breakLen - 1]
            } else {
              allZeroFlag.push(segment[j])
            }
          }
          continue
        }
      }
    }

    --breakLen
  }

  return result
}

/**
 * 将数字转化成保留两位小数的金额格式，如999,999,999.99
 *
 * @method parsePriceFormat
 * @param {number} price 需要转换的价格
 * @returns {String} 保留两位小数的金额格式
 */
function parsePriceFormat (price) {
  const str = price.toFixed(2)
  let newStr = ''
  let count = 0
  if (!str.includes('.')) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        newStr = str.charAt(i) + ',' + newStr
      } else {
        newStr = str.charAt(i) + newStr
      }
      count++
    }
    // 自动补小数点后两位
    newStr += '.00'
    return newStr
  } else {
    for (var i = str.indexOf('.') - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        newStr = str.charAt(i) + ',' + newStr
      } else {
        newStr = str.charAt(i) + newStr
      }
      count++
    }
    newStr += str.substr(str.indexOf('.'), 3)
    return newStr
  }
}

/**
 * 兼容的方式绑定事件
 *
 * @method registerEvent
 * @param {any} target 需要绑定事件的目标
 * @param {string} type 事件类型
 * @param {any} handler 事件处理函数
 */
function registerEvent (target, type, handler) {
  if (target.addEventListener) {
    target.addEventListener(type, handler)
  } else if (target.attachEvent) {
    // 兼容低版本ie
    target.attachEvent('on' + type, handler)
  } else {
    target['on' + type] = handler
  }
}

/**
 * 兼容的方式解绑事件
 *
 * @method removeEvent
 * @param {any} target 需要解绑事件的目标
 * @param {string} type 事件类型
 * @param {any} handler 事件处理函数
 */
function removeEvent (target, type, handler) {
  if (target.removeEventListener) {
    target.removeEventListener(type, handler)
  } else if (target.detachEvent) {
    // 兼容低版本ie
    target.detachEvent('on' + type, handler)
  } else {
    target['on' + type] = null
  }
}

/**
 * 函数去抖
 *
 * @method debounce
 * @param {(...args: any) => void} fn 要去抖的函数
 * @param {number} delay 去抖时间
 */
function debounce (fn, delay = 100) {
  let timer = 0;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

/**
 * 函数节流
 *
 * @method throttle
 * @param {(...args: any) => void} fn 要节流的函数
 * @param duration 节流时间间隔
 */
function throttle (fn, duration = 100) {
  let begin = new Date().getTime();
  return function (...args) {
    let current = new Date().getTime();
    if (current - begin >= duration) {
      fn.apply(this, args)
      begin = current;
    }
  }
}

export {
  computeScrollBarWidth,
  fastCopy,
  trim,
  forEach,
  deepMerge,
  dateToString,
  getWeekNameFromDate,
  toZhDigit,
  parsePriceFormat,
  registerEvent,
  removeEvent,
  debounce,
  throttle
}
