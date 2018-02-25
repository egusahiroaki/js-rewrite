import Person from './person';
import Dog from './dog';
import Ball from './ball';

export const call = function(personName, dogName, ballColor) {
  let alice = new Person(personName);

  console.log(alice.sayName());

  let newPet = new Dog();
  alice.keep(newPet);
  alice.namePet(dogName);
  console.log(newPet.say());
  console.log(newPet.sayOutside());
  let ball = new Ball(ballColor);
  newPet.find(ball);
  ball.rollOver();
  newPet.find(ball);
};

// Alice
// Alice さんのペットの名前は、 Max です
// わんわん!!
// 家の外からわんわん!!
// 犬はうろうろしているよ!
// 赤色のボールを見つけたよ!
