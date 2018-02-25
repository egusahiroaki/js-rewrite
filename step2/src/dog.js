var Dog = function(){
}

Dog.prototype.getName = function(name) {
  this.name = name;
}

Dog.prototype.say = function() {
  return "わんわん!!";
}

Dog.prototype.sayOutside = function() {
  return "家の外からわんわん!!";
}

Dog.prototype.find = function(ball) {
  if(ball.canBeFound){
    console.log(ball.color + "色のボールを見つけたよ!");
  }else{
    console.log("犬はうろうろしているよ!");
  }
}

export default Dog;
