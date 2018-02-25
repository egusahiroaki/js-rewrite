import Person from '../src/person';
import Dog from '../src/dog';


describe('Personクラスのテスト', () => {
  let person;

  beforeEach(() => {
    person = new Person('Alice');
  });

  it('nameプロパティにAlice', function() {
    expect(person.name).toBe('Alice');
  });

  it('sayメソッドでAlice', function() {
    expect(person.sayName()).toBe('Alice');
  });

  describe('ペットを飼う', () => {
    it('買ってる犬の名前はMax', function() {
      const dog = new Dog();
      person.keep(dog);
      person.namePet('Max');
      expect(person.dog.name).toBe('Max');
    });
  });
});
