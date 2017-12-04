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
    let word = a[i].split("");
    let resArr = [a[i]];
    let check = true;
    for (let j = 0; j < a.length; j++) {
        let _word = a[j].split("");
        let countChar = 0;

        for (let k = 0; k < word.length; k++) {
            for (let m = 0; m < _word.length; m++) {
                if (word[k] === _word[m]) {
                    countChar++;
                    break;
                }
            }
        }
        if (countChar === a[i].length && a[i] !== a[j] && word.length === _word.length) {
            resArr.push(a[j]);
        }
    }
    for (let key in result) {
        for (let _key in result[key]) {
            if (result[key][_key] === resArr[0]) {
                check = false;
            }
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
