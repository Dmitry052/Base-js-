// Напишите функцию для поиска анаграмм.
let a = [
    'вертикаль',
    'кильватер',
    'апельсин',
    'спаниель',
    'австралопитек',
    'ватерполистка',
    'кластер',
    'сталкер',
    'стрелка'
]
let result = [];
for (let i = 0; i < a.length; i++) {
    let resArr = [a[i]];
    let check = true;
    for (let j = i + 1; j < a.length; j++) {
        if (a[i].split("").sort().join('') === a[j].split("").sort().join('') && a[i] !== a[j]) {
            resArr.push(a[j]);
        }
    }
    for (let key in result) {
        if(result[key].indexOf(resArr[0]) !== -1){
            check = false;
        }
    }
    if (check) {
        result.push(resArr);    
    }
}
console.log(result);
// Напишите функцию которая на вход принимает аргумент “a.b.c.d”, а на выходе возвращает объект:
// function toObject(input) {
// // code
// }
// toObject(‘a.b.c.d’); // -> { a: { b: { c: { d: null } } } }
function toObject(input) {
    let arr = input.split(".");
    let obj = { [arr[arr.length - 1]]: null };
    for (let i = arr.length - 2; i > -1; i--) {
        let newObj = { [arr[i]]: obj }
        obj = newObj;
    }
    return obj;
}
let args = "a.b.c.d.f.s";
console.log(toObject(args));
//  Напишите функцию sum, вызываемую следующим образом:
// sum(1)(2)(3)....(n)(); // 1 + 2 + 3 + ... + n
// sum(1)(10)(); // 11
// sum(1)(); // 1
function sum(a) {
    var sum = a;
    f.toString = function () {
        return sum;
    };
    function f(b) {
        sum += b;
        return f;
    }
    return f;
}
console.log(sum(1)(2)(3));
