function Cat(name) {
  this.name = name;

  this.voice = function() {
    console.log("meow");
  };
}

function Dog(name) {
  this.name = name;

  this.voice = function() {
    console.log("gav");
  };
}

function AnimalFactory() {}

AnimalFactory.prototype.typeAnimal = Cat;
AnimalFactory.prototype.createAnimal = function(type, name) {
  switch (type) {
    case "cat":
      return new Cat(name);
    case "dog":
      return new Dog(name);
    default:
      return new Cat("noname");
  }
};

var factory = new AnimalFactory();
var dog = factory.createAnimal("dog", "Boss");
var cat = factory.createAnimal("cat", "Kate");

console.log("Dog ->", dog, dog instanceof Dog, dog.voice());
console.log("Cat ->", cat, cat instanceof Cat, cat.voice());
