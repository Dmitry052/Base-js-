var arr = [3,1,6,4,7,9,11,33,54,109,0,21321,324324,23];

Array.prototype.selection = function(){
    var len = this.length;
    for(var i = 0; i < len; i++ ){
        var min = i;
        for(var j = i + 1;j < len; j++){
            if(this[j] < this[min]) min = j;
        }
        var t = this[min]; // Сохраняем минимальное значение найдя его индекс в массиве
        this[min] = this[i]; // На позицию найденого минимума переносим текущее значение
        this[i] = t; // найденый минимум переносим в начало массива
    }
}

arr.selection();
console.log(arr);