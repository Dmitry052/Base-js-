var person = {
    name: "Dmitry",
    _age:20,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value * 2;
    }
}
console.log(person.age);
person.age = 2;
console.log(person.age);

console.log(Object.getOwnPropertyDescriptor(person,"name"));
console.log(Object.getOwnPropertyDescriptor(person,"age"));

//Для определения или переопределения свойств
//принимает Объект, свойство и дескриптор
Object.defineProperty(person, "gender", {
    value: "male",
    //недоступно для записи
    writable: false,
    //для исключения из перебора из цикла foreach
    enumerable: false,
    //Возможность изменения отрибутов свойства
    //удалить так же не удастся
    configurable: true
});
//Пытаемся переопределить свойство
Object.defineProperty(person, "gender", {
    writable: true,
});
//Пример перезаписи
console.log(person.gender);
person.gender = "female";
//Перечисляем все свойства объекта в том числе и наследованные
for(property in person){
    console.log(property);
}
//---------------
var obj = {};
//Делаем объект не расширяемым
Object.preventExtensions(obj);
//Проверяем на расширяемость
console.log(Object.isExtensible(obj));
//пытаемся создать свойство
obj.name = "test";
console.log(obj);
