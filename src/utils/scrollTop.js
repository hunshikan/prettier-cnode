export default function(speed) {
  var timerId = null
  cancelAnimationFrame(timerId)
  timerId = requestAnimationFrame(function fn() {
    let top = document.documentElement.scrollTop
    if (top > 0) {
      document.documentElement.scrollTop -= speed
      timerId = requestAnimationFrame(fn)
    } else {
      cancelAnimationFrame(timerId)
    }
  })
}
