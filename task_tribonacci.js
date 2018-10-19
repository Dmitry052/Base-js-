function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  }

  var resultArr = n >= 3 ? [...signature] : [];
  var index = 0;

  while (resultArr.length < n) {
    var count = 0;
    for (var i = index; i < index + 3; i += 1) {
      count = count + resultArr[i];
    }
    if (n <= 3) {
      resultArr.push(signature[index]);
    } else {
      resultArr.push(count);
    }

    index += 1;
  }
  return resultArr;
}

console.log(tribonacci([16, 18, 11], 3));
