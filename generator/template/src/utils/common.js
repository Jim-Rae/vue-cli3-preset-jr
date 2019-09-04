/**
 * @Author: JimRae
 * @Date: 2019-09-04
 * @Last Modified by: JimRae
 * @Last Modified time: 2019-09-04
 * @Desc 常用工具库
 */


/** 计算浏览器默认滚动条宽度
 * @method computeScrollBarWidth
 * @return {Number} 浏览器默认滚动条宽度
 */
const computeScrollBarWidth = () => {
  // 创建一个div来计算浏览器默认滚动条宽度
  const box = document.createElement("div")
  box.style.width = '100px'
  box.style.visibility = "hidden"
  box.style.position = "absolute"
  box.style.top = "-9999px"
  box.style.overflow = "scroll"
  document.body.appendChild(box)
  // 在box没有border的情况下，box.offsetWidth和box.clientWidth的差值就是滚动条宽度
  const scrollBarWidth = box.offsetWidth - box.clientWidth
  box.parentNode.removeChild(box)

  return scrollBarWidth
}


export {
  computeScrollBarWidth
}
