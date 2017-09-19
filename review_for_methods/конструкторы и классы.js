var Person, person, secondPerson;

Person = function(name){
    this.name = name;
};
//Создаём метод
Person.prototype.greet = function(){
    console.log("Test : "+this.name);
};
//Переопределяем
Person.prototype.toString = function(){
    return this.name+" toString";
}
person = new Person("Dmitry");
console.log(person.name);
console.log(person.toString());
person.greet();

Developer = function(name, skills) {
    Person.apply(this, arguments);
    this.skills = skills || [];
}
//Наследуем
Developer.prototype = Object.create(Person.prototype);
//Назначаем конструктор на нужную нам функцию т.к изначально она будт ссылаться на 
//Person
Developer.prototype.constructot = Developer;
developer = new Developer("Dmitry",["yii","css","js"]);
console.log(developer.skills);

