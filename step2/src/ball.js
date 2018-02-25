var Ball = function(color){
  this.color = color
  this.canBeFound = false; 
}

Ball.prototype.stop = function() {
  this.canBeFound = false;
}

Ball.prototype.rollOver = function() {
  this.canBeFound = true;
}

export default Ball;