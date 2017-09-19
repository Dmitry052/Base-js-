//Методы массивов
var array = ["First String","Second string","Third String"];
//возвращает все элементы с конкатенированные в одну строку
console.log(array.join("|"));
//обратная последовательность(изменяет)
console.log(array.reverse());
//сортировка(по ум. в алфавитном порядке)
console.log(array.sort());
//добавление в массив(создаёт новый)
console.log(array.concat("Hello",["one","two","three"]));
//Метод slice(begin, end) копирует участок массива от begin
//до end, не включая end. Исходный массив при этом не меняется.
console.log(array.slice());
//arr.splice(index[, deleteCount, elem1, ..., elemN])
// Удалить deleteCount элементов, начиная с номера index, 
// а затем вставить elem1, ..., elemN на их место. Возвращает
//  массив из удалённых элементов.
//Изменяет. ИНДЕКС,КОЛ-ВО,"ЧТО ВСТАВИТЬ"
console.log(array.splice(0,1,"Dmitry","Test"));
console.log(array);
//Добавление в конец массива
array.push("push_JavaScript");
console.log(array);
//Добавление в начало массива
array.unshift("Start_Array");
console.log(array);
//Удаляет последний элемент и возвращает его
console.log(array.pop());
console.log(array);
//Удаляет из начала и возвращает
console.log(array.shift());
console.log(array);
