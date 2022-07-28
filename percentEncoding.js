const urlEncode = function(text) {
  let newText = '';
  for (const letter of text) {
    if (letter === " ") {
      newText += "%20";
    } else {
      newText += letter;
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));