const unique = arr => {
  const obj = {};
  arr.forEach(item => {
    obj[item] = true;
  });

  return Object.keys(obj); 
};

const a = unique([1,2,3,4,3,2,1,3,4]);
