function Observable() {
  this.observebles = [];
}

function Observer(behavior) {
  this.behavior = behavior;
}

Observable.prototype.sendMessage = function(msg) {
  const len = this.observebles.length;

  for (let i = 0; i < len; i += 1) {
    this.observebles[i].notify(msg);
  }
};

Observable.prototype.addObserver = function(observer) {
  this.observebles.push(observer);
};

Observer.prototype.notify = function(msg) {
  this.behavior(msg);
};

let observable = new Observable();
let obs1 = new Observer(function(msg) {
  console.log(`obs1:${msg}`);
});
let obs2 = new Observer(function(msg) {
  console.log(`obs2:${msg}`);
});
observable.addObserver(obs1);
observable.addObserver(obs2);

observable.sendMessage("hello");
