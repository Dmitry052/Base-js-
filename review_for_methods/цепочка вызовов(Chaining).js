//Chaining
//Цепочка вызовов.
//Ситуация когда в объекте необходимо вызвать несколь функций
var ladder = {
    step: 0,
    up: function() {
      this.step++;
      return this;
    },
    down: function() {
      this.step--;
      return this;
    },
    showStep: function() {
      //alert( this.step );
      return this;
    }
  }
  ladder.up().up().down().up().down().showStep().up().up();
  console.log(ladder.step); // 1
