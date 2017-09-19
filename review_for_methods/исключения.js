var calc = function(n){
    if(n > 10) throw new Error("Ошибка > 10");
    return n + 10;
};

// calc(11);
try {
    calc(11);
} catch (e){
    console.log(e.message);
}