//возведение в степень(число,степень)
console.log(Math.pow(2,5));
//квадратный корень
console.log(Math.sqrt(4));
//модуль
console.log(Math.abs(-300));
//Округление(в большую)
console.log(Math.round(6.6));
//принудительное округление
console.log(Math.floor(6.6));
console.log(Math.ceil(6.6));
//min max
console.log(Math.min(6,5,6,8,9,2,1,0));
console.log(Math.max(6,5,6,8,9,2,1,0));
//возводим e в степень
console.log(Math.exp(1));
//random
var getRandom = function(min,max){
    return Math.floor(Math.random() * (max - min) + min);
};
console.log(Math.random() + "__" + getRandom(5,17));