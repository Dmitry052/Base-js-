var greet = function(greeting){
    return greeting +" Hello! Name "+this.name;
}
var person = {
    name: "Dmitry",
    greet: greet
}
var twoperson = {
    name: "Ivan",
    greet: greet
}

console.log(person.greet("test"));
console.log(twoperson.greet("test2"));

console.log(twoperson.greet.call(person,"test3"));
console.log(twoperson.greet.apply(twoperson,["test4"]));

var bound = greet.bind(person);
console.log(bound("test5"));