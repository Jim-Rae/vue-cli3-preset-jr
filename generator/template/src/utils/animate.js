/**
 * @Author: JimRae
 * @Date: 2019-09-04
 * @Last Modified by: JimRae
 * @Last Modified time: 2019-09-04
 * @Desc javascript动画库
 */


/** 动画式触发scrollTo，动画的timing-function是ease-in-out
 * @method scrollAnimateTo
 * @param {Element} element 内容可滚动的element对象
 * @param {Number} to 需要滚动到的位置
 * @param {Number} duration 动画持续时间
 * @return {} 没有返回值
 */
const scrollAnimateTo = (element, to, duration) => {
  const scrollRange = Math.abs(to - element.scrollTop)
  if (scrollRange === 0) return
  const step = Math.PI / ( duration / 15 ),
        cosParameter = scrollRange / 2
  let count = 0,
      stepValue,
      interval = setInterval(() => {
        if (Math.abs(to - element.scrollTop) > 10) {
          count = count + 1
          stepValue = cosParameter - cosParameter * Math.cos(count * step)
          stepValue = to - element.scrollTop >= 0 ? stepValue : -stepValue
          if(stepValue > Math.abs(to - element.scrollTop))
            stepValue = to - element.scrollTop
          element.scrollTop += stepValue
        }
        else clearInterval(interval)
      }, 15)
}


export {
  scrollAnimateTo
}
