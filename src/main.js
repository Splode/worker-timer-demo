import TimerWorker from 'web-worker:./TimerWorker'
import Timer from './Timer'

;(function () {
  const worker = new TimerWorker()
  const timer = new Timer(10)

  const start = performance.now()
  timer.start()
  setTimeout(() => {
    console.log(performance.now() - start)
  }, 1000 * 60 * 10)
})()
