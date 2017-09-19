
//Замыкание
// var counter = (function(){
//     var counter = 0;
//     return function(){
//         return counter ++;
//     }
// }());
//Функция является объектом
//Аналог реализации. Создаём свойство объекта.
var counter = function(num){
    counter.count = num !== undefined ? num : counter.count;
    return counter.count++;
}
counter.count = 0;
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
