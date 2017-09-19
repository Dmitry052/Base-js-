//Сериализация
//Преобразование объектов в строки
var user = {
    name: "Dmitry",
    id: 42345,
    time: Date.now(),
    toJSON: function(){
        return {
            id : this.id,
            time:   this.time
        }
    }
};
//stringify проверяет наличием метода toJSON
//если он есть то формируется строка из того что формирует
//данный метод
var userData = JSON.stringify(user);
console.log(typeof userData+" : "+userData);
//Из строки объект

var newObj = JSON.parse(userData);
console.log(typeof newObj + " : " + newObj);