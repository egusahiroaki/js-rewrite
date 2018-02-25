class Dog {
  getName(name) {
    this.name = name;
    this.hasFound = false; // テスト用のエンドポイントあとでなんとかする
  }

  say() {
    return 'わんわん!!';
  }

  sayOutside() {
    return '家の外からわんわん!!';
  }

  find(ball) {
    console.log(ball.canBeFound);
    if (ball.canBeFound) {
      console.log(ball.color + '色のボールを見つけたよ!');
      this.hasFound = ball.canBeFound;
    } else {
      console.log('犬はうろうろしているよ!');
      this.hasFound = ball.canBeFound;
    }
  }
}

export default Dog;
