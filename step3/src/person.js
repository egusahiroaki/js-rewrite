class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return this.name;
  }

  keep(dog) {
    this.dog = dog;
  }

  // ペットに名付ける
  namePet(name) {
    this.dog.getName(name);
    console.log(this.name + ' さんのペットの名前は、 ' + this.dog.name + ' です');
  }
}

export default Person;
