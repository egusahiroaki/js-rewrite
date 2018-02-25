class Ball {
  constructor(color) {
    this.color = color;
    this.canBeFound = false;
  }

  stop() {
    this.canBeFound = false;
  }

  rollOver() {
    this.canBeFound = true;
  }
}


export default Ball;
