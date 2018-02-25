class Dog {
  getName(name) {
    this.name = name;
  }

  say() {
    return 'わんわん!!';
  }

  sayOutside() {
    return '家の外からわんわん!!';
  }

  find(ball) {
    if (ball.canBeFound) {
      console.log(ball.color + '色のボールを見つけたよ!');
    } else {
      console.log('犬はうろうろしているよ!');
    }
  }
}

export default Dog;
