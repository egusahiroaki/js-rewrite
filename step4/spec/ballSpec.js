import Ball from '../src/ball';

describe('Ballクラスのテスト', () => {
  let ball;

  beforeEach(() => {
    ball = new Ball('red');
  });

  describe('引数 "red" で初期化する', () => {
    it('colorプロパティにred', function() {
      expect(ball.color).toBe('red');
    });

    it('canBeFoundプロパティはfalse', function() {
      expect(ball.canBeFound).toBeFalsy();
    });
  });
});
