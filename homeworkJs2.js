https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(string) {
    return Math.min(...string)
  }
}

https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  let result = circle.radius*2*Math.PI;
  return result;
}

https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  
  introduce(){
    return 'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.  Meow meow!';
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  
  greetMaster(){
    return 'Hello,' + this.mane + 'my name is'  + this.master + ' and I am ' + this.age + ' years old.';
  }
}


