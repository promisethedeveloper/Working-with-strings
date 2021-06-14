const name = "Promise Onyeka Morka";

// Getting the index of the first letter
console.log(name.indexOf('P'));

// Number of characters in the name
console.log(name.length);

// Getting the first letter
console.log(name[0]);

// Getting the first name
console.log(name.slice(0, name.indexOf(' ')));

// Getting the first name and middle name
console.log(name.slice(0, name.lastIndexOf(' ')));

// Getting just the middle name
console.log(name.slice(name.indexOf(' ') + 1, name.lastIndexOf(' ')));

// Getting middle name and last name
console.log(name.slice(name.indexOf(' ') + 1));

// Getting the last name
console.log(name.slice(name.lastIndexOf(' ') + 1));

// Getting the last name from the back
console.log(name.slice(-5))