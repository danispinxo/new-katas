const checkAir = function(samples, threshold) {
  
  const calculate = (samples) => {
    let total = samples.length;
    let dirtyAmount = samples.filter(word => word === "dirty").length;
    return dirtyAmount / total;
  };

  if (calculate(samples) >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));