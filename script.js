// Exercise 3
// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

function drawPattern() {
  for (i = 0; i < 1; ++i) {
    console.log("*");
    for (j = 0; j < 1; j++) {
      console.log("**");
      for (k = 0; k < 1; k++) {
        console.log("***");
        for (l = 0; l < 1; l++) {
          console.log("****");
          for (m = 0; m < 1; m++) {
            console.log("*****");
          }
        }
      }
    }
  }
}

drawPattern();

// Exercise 4
// Write while loops to do the following:
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.
// - Print all the odd numbers between 1 - 100.
// - Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
