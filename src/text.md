//USING toFixed() method:

// const rating = 8.765;
// const roundedRating = rating.toFixed(1); // Rounds to 1 decimal place
// console.log(roundedRating); // "8.8"
// Note: toFixed() returns a string, so if you need the result as a number, you can convert it back to a number 
using parseFloat():

// const rating = 8.765;
// const roundedRating = parseFloat(rating.toFixed(1)); // Convert to number
// console.log(roundedRating); // 8.8 (as a number)

// ======================================================


//USING Math.round() method:

const rating = 8.765;
const roundedRating = Math.round(rating * 10) / 10;  // Rounds to 1 decimal place
console.log(roundedRating);  // 8.8
Summary:
toFixed(1) : is the easiest way to round a number to 1 decimal place, but it returns a string.
Math.round() : is more flexible and returns a number.