var People = function(){
    // Набор свойств
}

Array.prototype.shuffle = function(countSkills){
    var i =0;
    while(i < countSkills) {
        var a = Math.floor((Math.random() * countSkills));
        if(this.indexOf(a) === -1){ 
            this[i] = a; 
            i++;
        }
    }
    return this;
}
People.prototype.danceRNB = function(){
    return "<< R'N'B >> : покачивания телом вперед и назад, ноги в полу-присяде, руки согнуты в локтях, головой вперед-назад";
};
People.prototype.danceElectrohouse = function(){
    return "<< Electrohouse >> : покачивание туловищем вперед-назад, почти нет движения головой, круговые движения - вращения руками, ноги двигаются в ритме";
};
People.prototype.dancePOP = function(){
    return "<< POP >> : плавные движения туловищем, руками, ногами и головой";
};
People.prototype.default = function(){
    return "Пьёт 'Путинку'";
};
var getRandom = function(min,max){
    return Math.floor(Math.random() * (max - min) + min);
};

var directionMusic = function(set){
    switch (set){
        case 0:
            return "R'N'B";
        case 1:
            return "Electrohouse";
        case 2:
            return "POP";
        default:
            return "Сломался пульт";
    }
}

// Эмулируем число пришедших
var pos = prompt("Сколько вмещает клуб?")
var visit = getRandom(0, pos);

// Если ни кто не пришёл выключаем свет
if(!visit == 0){
    var gender, skills, musicPling, musicCode;
    // Определяем что включил DJ
    musicCode = getRandom(0,3);
    musicPlaing = directionMusic(musicCode)
    document.write("<h3>Мест в клубе : "+pos+"<h3>Пришло гостей : " + (visit+1) + "<h3>");
    document.write("<div>DJ включил : " + musicPlaing + "</div><hr>");
    
    while(visit !==-1 ){
        // Определяем кто пришёл(мальчик или девочка)
        gender = Math.random() < 0.5 ? "BOY" : "GIRL";
        // Что умеет пришедший(число навыков)
        skills = getRandom(0,4);
        var comeHuman = new People();
       
        if(!skills == 0){
            var arrSkills = [];
            var skill = arrSkills.shuffle(skills).indexOf(musicCode) === -1 ? musicCode : '';
            
            switch(skill){
                case 0:
                    document.write("<div>Гость : " + gender +" танцует : " + comeHuman.danceRNB() + "</div>");
                    break;
                case 1:
                    document.write("<div>Гость : " + gender +" танцует : " + comeHuman.danceElectrohouse() + "</div>");
                    break;
                case 2:
                    document.write("<div>Гость : " + gender +" танцует : " + comeHuman.dancePOP() + "</div>");
                    break;
                default:
                    document.write("<div>Гость : " + gender +" : " + comeHuman.default() + "</div>");
            }
        }
        else {
            document.write("<div>Гость : " + gender +" : " +comeHuman.default() + "</div>");
        }

        visit--;
    }
}
else {
    document.write("Ни кого нет, экономим свет");
}
;
