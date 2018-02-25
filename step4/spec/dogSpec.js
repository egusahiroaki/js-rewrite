import Dog from '../src/dog';
import Ball from '../src/ball';

describe('Dogクラスのテスト', () => {
  let dog;

  beforeEach(() => {
    dog = new Dog();
  });

  it('nameプロパティにMax', function() {
    dog.getName('Max');
    expect(dog.name).toBe('Max');
  });


  it('sayメソッド', function() {
    const expected = 'わんわん!!';
    expect(dog.say()).toBe(expected);
  });

  it('sayOutsideメソッド', function() {
    const expected = '家の外からわんわん!!';
    expect(dog.sayOutside()).toBe(expected);
  });

  describe('findメソッド', () => {
    it('ボールを見つけた', function() {
      const mockBall = new Ball();
      // spyOn(mockBall, 'canBeFound').and.returnValue(true);

      mockBall.canBeFound = true;
      dog.find(mockBall);
      expect(dog.hasFound).toBeTruthy();
    });

    it('ボールを見つけてない', function() {
      const mockBall = new Ball();
      // spyOn(mockBall, 'canBeFound').and.returnValue(false);
      mockBall.canBeFound = false;

      dog.find(mockBall);
      expect(dog.hasFound).toBeFalsy();
    });
  });
});
