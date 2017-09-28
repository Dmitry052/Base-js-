var str = 'Это строка создана для того, что бы её перевернули задом на перёд пополам';
console.log(str);
var res = str.split('');
console.log('Стандартный метод reverse: ',(res.reverse()).join(""));
// ---------------------
var str = 'Это вторая строка создана для того, что бы её перевернули задом на перёд пополам';
console.log(str);
var res = str.split('');
console.log('Свой метод: ',myReverse(res).join(""));

function myReverse(arr) {
    var len = str.length - 1, i = 0, a;
    while (i <= len/2) {
        a = arr[i];
        arr[i] = arr[len - i];
        arr[len - i] = a;
        i++;
    }
    return arr;
}