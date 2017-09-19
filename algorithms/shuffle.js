var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log(arr);

Array.prototype.shuffle = function(){
    var len = this.length-1;
    while(len >= 0){
        var a = this[len];
        var index = Math.floor(Math.random()*len);
        this[len] = this[index];
        this[index] = a;
        len--;
    }
};

arr.shuffle();
console.log(arr);