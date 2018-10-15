var addTwoNumbers = function(l1, l2) {
  function ListNode(val) {
    this.val = val;
    this.next = null;

    var Node = function(val) {
      this.val = val;
      this.next = null;
    };

    this.getVal = function() {
      return this.val;
    };

    this.add = function(element, dec) {
      if (this.val) {
        this.val = this.val + element * dec;
      } else {
        this.val = element * dec;
      }

      var node = new Node(element);
      if (this.next === null) {
        this.next = node;
      } else {
        var currentNode = this.next;

        while (currentNode.next) {
          currentNode = currentNode.next;
        }

        currentNode.next = node;
      }
    };
  }

  function setDataListNode(list, data) {
    var dec = 1;
    var resultArr = [];
    for (var i = 0; i < data.length; i++) {
      list.add(data[i] * 1, dec);
      resultArr.push(data[i] * 1);
      dec *= 10;
    }
    return resultArr;
  }

  function createArr(num) {
    var arr = String(num).split("");
    var result = [];

    for (var i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i] * 1);
    }
    return result;
  }

  var list1 = new ListNode();
  setDataListNode(list1, l1);
  var list2 = new ListNode();
  setDataListNode(list2, l2);
  var resultList = new ListNode();
  var sum = String(list1.getVal() + list2.getVal())
    .split("")
    .reverse();
  var resultArr = setDataListNode(resultList, sum);

  return resultList;
};

console.log(addTwoNumbers([5, 0, 5], [5, 6, 5]));
