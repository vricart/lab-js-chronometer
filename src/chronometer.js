class Chronometer {
  constructor() {
      this.currentTime = 0,
      this.intervalId = null
  }



  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        return printTimeCallback()
      }
      // console.log(this.currentTime)
    }, 1000)
  }



  getMinutes() {
    return Math.floor(this.currentTime/60)

  }



  getSeconds() {
    return this.currentTime % 60
  }



  computeTwoDigitNumber(value) {
    let formattedNumber = ("0" + value).slice(-2);
    return formattedNumber;
  }



  stop() {
    clearInterval(this.intervalId);
  }



  reset() {
    this.currentTime = 0;
  }



  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes);
    let seconds = this.computeTwoDigitNumber(this.getSeconds);
    return `${minutes} + ":" + ${seconds}`;
  }



// let clock = new Chronometer


// console.log(clock)

// clock.start()

// let check = setTimeout(()=>{
//   console.log(clock.getMinutes())
// }, 3000)

// console.log(check)