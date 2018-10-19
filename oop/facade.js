var Example = function(name) {
  this.name = name;
  this.somedata = [];
};

Example.prototype.addData = function(data) {
  this.somedata.push(data);
  return this;
};

Example.prototype.showData = function() {
  console.log(this.somedata);
  return this;
};

var $ = function(name) {
  return new Example(name);
};

$("Test1")
  .addData(1)
  .addData(2)
  .addData("3")
  .showData();
