// Сортировки
var arr = [];
// Создаём массив
for (var i = 0; i < 10; i++) {
    arr.push(i);
}
console.log('Создан массив : ' + arr + '<br>');
// 0.Перемешка
Array.prototype.shuffle = function () {
    var len = this.length - 1;
    while (len >= 0) {
        var f = this[len];
        var index = Math.floor(Math.random() * len);
        this[len] = this[index];
        this[index] = f;
        len--;
    }
    console.log('Перемешен : ' + this + '<br>');
}
Array.prototype.bubble = function () {
    var len = this.length - 1;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (arr[j + 1] < arr[j]) {
                var f = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = f;
            }
        }
    }
    document.write('Пузырьковая : ' + this + '<br>');
}
Array.prototype.select = function () {
    var len = this.length;
    for (var i = 0; i < len; i++) {
        var min = i;
        for (var j = i + 1; j < len; j++) {
            if (this[j] < this[min]) {
                min = j;
            }
        }
        var f = this[min];
        this[min] = this[i];
        this[i] = f;
    }
    document.write('Выбором : ' + this + '<br>');
}
Array.prototype.insert = function () {
    var len = this.length;
    for (var i = 0; i < len; i++) {
        var a = this[i];
        var b = i - 1;
        while (b >= 0 && this[b] > a) {
            this[b + 1] = this[b];
            b--;
        }
        this[b + 1] = a;
    }
    document.write('Вставками : ' + this + '<br>');
}
Array.prototype.merger = function () {
    (function quickSort(arr, left, right) {
        var index;
        if (arr.length > 1) {
            index = partition(arr, left, right);

            if (left < index - 1) {
                quickSort(arr, left, index - 1);
            }

            if (index < right) {
                quickSort(arr, index, right);
            }
        }
    })(this, 0, this.length - 1);

    // Замена
    function swap(arr, firstIndex, secondIndex) {
        var temp = arr[firstIndex]; //сохраняем значени
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
    }
    // Разбиваем
    function partition(arr, leftPoint, rightPoint) {
        var pivot = arr[Math.floor((leftPoint + rightPoint) / 2)];
        while (leftPoint <= rightPoint) {
            while (arr[leftPoint] < pivot) {
                leftPoint++;
            }

            while (arr[rightPoint] > pivot) {
                rightPoint--;
            }

            if (leftPoint <= rightPoint) {
                swap(arr, leftPoint, rightPoint);
                leftPoint++;
                rightPoint--;
            }
        } return leftPoint;
    }
    console.log('Слиянием : ', this);
}
// Мешаем
arr.shuffle();
// 1. Пузырьковая
// arr.bubble();
// 2. Выбором
// arr.select();
// 3. Вставка
// arr.insert();
// 4. Слиянием
// arr.merger();






