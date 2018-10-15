var myModule = (function() {
  var instance = false;
  var data = null;

  function init() {
    instance = true;

    return {
      setData: function(value) {
        data = value;
        return "success";
      },
      getData: function() {
        return data;
      }
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

var singleton = myModule.getInstance();
var singleton2 = myModule.getInstance();
console.log("check", singleton === singleton2);
console.log("singleton", singleton);
singleton.setData("test data");
console.log("singleton", singleton.getData());
