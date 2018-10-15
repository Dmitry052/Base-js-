var myModule = (function() {
  var privateData = null;

  function setPrivateData(value) {
    privateData = value;
  }

  function setData(value) {
    privateData = value;
    return "success";
  }

  function getData() {
    return privateData;
  }

  return {
    setData: setData,
    getData: getData
  };
})();

console.log(myModule.setData("teeeest"));
console.log(myModule.getData());
