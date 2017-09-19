//Прототип
var Person = {
    constructor : function(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function(){
        console.log("Hi, my name is " + this.name);
    }
};
var person, secondperson, thirdperson;
person = Object.create(Person).constructor("Dmitry",22,"male");
person.greet();
//для определения является ли объект прототипом другого
console.log(Person.isPrototypeOf(person));

var WebDeveloper = Object.create(Person);
//Добавим новое свойство конструктору для этого класса
WebDeveloper.constructor = function(name,age,gender,skills){
    Person.constructor.apply (this, arguments);
    this.skills = skills || [];
    return this
}
//СОздаём объект
var webDeveloper = Object.create(WebDeveloper).constructor("Dmitry",22,"mail",["css","html","js"]);
console.log(webDeveloper.skills);
webDeveloper.greet();
