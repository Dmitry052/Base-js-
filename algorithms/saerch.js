var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var s = 6;
console.log(lineSerach(arr, s))
// Линейный поиск
function lineSerach(arr, s) {
    var len = arr.length, i = 0;
    arr[len] = s;
    while (arr[i] != s) {
        i++;
    }
    if (i < arr.length) return i;
}
// Бинарный поиск
function binSearch(arr, t) {
    var i = 0, k;
    var j = arr.length - 1;

    while (i <= j) {
        k = Math.floor((i + j) / 2);
        if (t === arr[k]) return k;
        else if (t < arr[k]) j = k - 1;
        else i = k + 1;
    }
}





