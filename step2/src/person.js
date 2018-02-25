var Person = function(name){
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

export default Person;
