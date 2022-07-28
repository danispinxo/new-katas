const conditionalSum = function(values, condition) {
  const initialValue = 0;

  if (condition === "even") {
    let arr = values.filter(number => number % 2 === 0);
    return arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue);
  }
  if (condition === "odd") {
    let arr = values.filter(number => number % 2 !== 0);
    return arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue);
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));