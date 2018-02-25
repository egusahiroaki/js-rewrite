var Ball = function(color){
  this.color = color
  this.canBeFound = false; 
}

Ball.prototype.stop = function(name) {
  this.canBeFound = false;
}

Ball.prototype.rollOver = function() {
  this.canBeFound = true;
}

export default Ball;