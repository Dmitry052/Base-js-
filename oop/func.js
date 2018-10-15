function Example1(value, type, name) {
  this.name = name;
  // *
  var self = this;
  var value = value;
  var type = type;
  var CONST_PARAM = 1000;

  function getPrivateData() {
    return value + "_" + type + "_" + self.name + "_" + CONST_PARAM;
  }

  this.getData = function() {
    return getPrivateData();
  };
}

function Example2(value, type) {
  this.value = value;
  this.type = type;
}

var example1 = new Example1("VALUE1", "TYPE1", "NAME1");
console.log(example1.getData());
