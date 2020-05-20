export default class Timer {
  constructor(min) {
    this.time = 0
    this.totalSeconds = min * 60
  }

  pause() {
    clearInterval(this.timerInt)
    delete this.timerInt
  }

  start() {
    if (!this.timerInt) {
      this.startTime = performance.now()
      this.timerInt = setInterval(() => {
        this.time += 1
        if (this.time >= this.totalSeconds) {
          console.log(performance.now() - this.startTime)
          this.pause()
        } else {
          // console.log('tick')
        }
      }, 1000)
    }
  }
}
