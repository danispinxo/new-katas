const numberOfVowels = function(data) {
  let count = 0;
  for (const letter of data) {
    if (letter === "a" || letter === "i" || letter === "o" || letter === "e" || letter === "u") {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));