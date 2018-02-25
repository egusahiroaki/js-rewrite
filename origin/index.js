var Person;
var Dog;
var Ball;

(function(){
  Person = function(name){
    this.name = name;
  }

  Person.prototype.sayName = function() {
    return this.name;
  }

  Person.prototype.keep = function(dog) {
    this.dog = dog;
  }

  // ペットに名付ける
  Person.prototype.namePet = function(name) {
    this.dog.getName(name);
    console.log(this.name + " さんのペットの名前は、 " + this.dog.name + " です");
  }

  Dog = function(){
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

  Ball = function(color){
    this.color = color
    this.canBeFound = false; 
  }

  Ball.prototype.stop = function(name) {
    this.canBeFound = false;
  }

  Ball.prototype.rollOver = function() {
    this.canBeFound = true;
  }

}());

function init(personName, dogName, ballColor){
  var alice = new Person(personName);

  console.log(alice.sayName());

  var newPet = new Dog();
  alice.keep(newPet);
  alice.namePet(dogName);
  console.log(newPet.say());
  console.log(newPet.sayOutside());
  var ball = new Ball(ballColor);
  newPet.find(ball);
  ball.rollOver();
  newPet.find(ball);  
}

// Alice
// Alice さんのペットの名前は、 Max です
// わんわん!!
// 家の外からわんわん!!
// 犬はうろうろしているよ!
// 赤色のボールを見つけたよ!
