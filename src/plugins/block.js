export default function generateStack() {
  this.isBlocked = true
  this.waiters = []
  this.ready = function () {
    return new Promise((resolve) => {
      if (!this.isBlocked) {
        resolve()
      } else {
        this.waiters.push(resolve)
      }
    })
  }
  this.setReady = function () {
    this.isBlocked = false
    while (this.waiters.length) {
      var waiter = this.waiters.shift()
      waiter()
    }
  }
  this.setBlock = function () {
    this.isBlocked = true
  }
  this.destroy = function () {
    this.isBlocked = null
    this.waiters = null
  }
}
