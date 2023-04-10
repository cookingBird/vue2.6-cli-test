function updateView ($el) {
  if ($el) {
    const style = getComputedStyle($el)
    const ml = style.marginLeft
    const mr = style.marginRight
    $el.style.width = `calc(100% - ${ml} - ${mr})`
    const mt = style.marginTop
    const mb = style.marginBottom
    $el.style.height = `calc(100% - ${mt} - ${mb})`
  }
}
export default {
  install (Vue) {
    Vue.directive('full', {
      inserted: updateView,
      componentUpdated: updateView
    })
  }
}
