const repeatNumbers = function(data) {
  let newArray = [];
  let selection = '';
  for (let item of data) {
    for (let i = 0; i < item[1]; i++) {
      selection += item[0];
    }
    newArray.push(selection);
    selection = '';
  }
  return newArray.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));