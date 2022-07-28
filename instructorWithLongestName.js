const instructorWithLongestName = function(instructors) {
  instructors.sort(function(a, b) {
    const nameALength = a.name.length;
    const nameBLength = b.name.length;

    if (nameALength > nameBLength) {
      return -1;
    }
    if (nameALength < nameBLength) {
      return 1;
    }
    return 0;
  });
  return instructors[0];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));