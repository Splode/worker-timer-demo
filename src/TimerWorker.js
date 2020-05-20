import Timer from './Timer'

const timer = new Timer(10)
const start = performance.now()
timer.start()

setTimeout(() => {
  console.log(performance.now() - start)
}, 1000 * 60 * 10)
