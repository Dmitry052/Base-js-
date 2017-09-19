var arr = [3,1,6,4,7,9,11,33,54,109,0,21321,324324,23];
console.log(arr);

Array.prototype.bubble = function(){
    var len = this.length-1;
    for(var i = 0; i < len; i++ ){
        for(var j = 0; j < len - i; j++){
            if(this[j+1] < this[j]){
                f = this[j+1];
                this[j+1] = this[j] ;
                this[j] = f;
            }
        }
    }
}

arr.bubble();
console.log(arr);