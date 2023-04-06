function getWindowTimer (type) {
  switch (type) {
    case 'requestAnimationFrame': {
      return {
        exec: window.requestAnimationFrame.bind(window),
        cancel: window.cancelAnimationFrame.bind(window)
      }
    }
    case 'requestIdleCallback': {
      return {
        exec: window.requestIdleCallback.bind(window),
        cancel: window.cancelIdleCallback.bind(window)
      }
    }
    case 'setTimeout': {
      return {
        exec: window.setTimeout.bind(window),
        cancel: window.clearTimeout.bind(window)
      }
    }
    case 'setImmediate': {
      return {
        exec: window.setImmediate.bind(window),
        cancel: window.clearImmediate.bind(window)
      }
    }
  }
}
const calcRow = (function () {
  let timer
  return function triggerObserve (
    entry,
    rowHeight = 59,
    debounceType = 'setTimeout'
  ) {
    return new Promise((resolve, reject) => {
      timer && getWindowTimer(debounceType).cancel(timer)
      const tableNode = entry.target
      console.log('calcRow----------', tableNode)
      timer = getWindowTimer(debounceType).exec(() => {
        //表是否存在行内容
        const rowContent =
          tableNode.hasChildNodes &&
          tableNode.childNodes[0] &&
          tableNode.childNodes[0].nodeType != Node.COMMENT_NODE
            ? tableNode.childNodes[0]
            : null
        //!计算需要插入的行数
        //*1、计算table__body的剩余高度
        const contentWrapper = tableNode
        const contentWrapperHeight =
          contentWrapper.getBoundingClientRect().height
        //*2、计算行高度
        const rawHeight =
          rowContent?.getBoundingClientRect().height || rowHeight
        //*3、得到空行数
        const rowNum = Math.floor(contentWrapperHeight / rawHeight)
        resolve(rowNum)
        timer = void 0
      }, 16)
    })
  }
})()
export default calcRow
