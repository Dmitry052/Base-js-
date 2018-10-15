function Example1(value, type) {
  this.value = value;
  this.type = type;
}

Example1.prototype.showData = function() {
  console.log("Parent log:", this.value, this.type);
};

function Example2(value, type) {
  Example1.apply(this, arguments);

  this.showData = function() {
    Example1.prototype.showData.apply(this);
    console.log("Children log:", this.value, this.type);
  };
}

Example2.prototype = Object.create(Example1.prototype);
Example2.prototype.constructor = Example2;

var test = new Example2("value1", "type1");
test.showData();
