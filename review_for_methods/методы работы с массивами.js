//Все(почти) указанные методы возвращают новый массив
var array = ["First String","Second string","Third String","JS"];
//Передаём(ссылка на элемент,индекс,сам массив)
//Изменяет исходный т.к меняем callback функцию
array.forEach(function(element,index,array){
   array[index] = element.toLowerCase();
});
console.log(array);
//Аналог map
//Возвращает новый массив
console.log(array.map(function(e){return e.toUpperCase()}));
console.log(array);
//Отсеить элементы по критерию
//отсеить элементы с буквой "c"
//если true вщзвращает элемент в новый массив иначе нет
var filter = array.filter(function(e){
    //поиск значения в подстроке - indexOf
    return e.indexOf('c') === -1;
});
console.log(filter);
//Возвращает boolean
//true - если все элементы выолняют условие 
//false - если хотя бы один нет
console.log(array.every(function(e){return e.length > 4}));
//Возвращает boolean
//true - если хотя бы один выполняет условие
console.log(array.some(function(e){return e.length > 4}));
//Метод «arr.reduce(callback[, initialValue])» используется 
// для последовательной обработки каждого элемента массива с 
// сохранением промежуточного результата.
//reduceRight делает тоже самое только с право на лево
var num = [1,2,3,4,5,6,7,3];
var res = num.reduce(function(sum,current){
    return sum + current;
});
console.log(res);
//возвращают индекс вхождения в массиве 
//первыйй и последний
//если такого нет вернут -1
console.log(num.indexOf(3));
console.log(num.lastIndexOf(3));
console.log(num.lastIndexOf(17));