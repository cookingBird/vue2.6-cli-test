export default function (entry) {
  const targetStyle = getComputedStyle(entry.target)
  const mt = targetStyle.marginTop
  const mb = targetStyle.marginBottom
  entry.target.style.height = `calc(100% - ${mt} - ${mb})`
}
