//(регулярное выражение, флаг) global,ignorcase,multiline
var pattern = new RegExp("\w+","gim");
//предпочтительный вариант использования
var pattern = /\w+/g,
    string = "Test regular phrase";
//Метод принимает регулярное выражение и возвращает массив
console.log(string.match(pattern));
//Поиск, игнорит флаг global
console.log(string.search(pattern));
