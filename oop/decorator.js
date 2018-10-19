function Example(name) {
  this.name = name;
}

Example.prototype.showName = function() {
  console.log("Name -> " + this.name);
};

var example = new Example("TEST1");
example.type = ["string", "number"];

example.showName = function() {
  Example.prototype.showName.call(this);
  console.log("Name new -> " + this.name);
};

example.showName();
