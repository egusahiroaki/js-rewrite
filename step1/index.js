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

var alice = new Person("Alice");

console.log(alice.sayName());

var newPet = new Dog();
alice.keep(newPet);
alice.namePet("Max");
console.log(newPet.say());
