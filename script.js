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
function myLoop() {
  let xValue = 10;
  while (xValue > 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
  }
}

myLoop();

// - Print all the odd numbers between 1 - 100.
function printOddNums() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOddNums();

// - Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]
function printInBrackets(n) {
  let i = 1;
  while (i <= n) {
    console.log(`[${i}]`);
    i++;
  }
}
printInBrackets(6);
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
function sum(n) {
  let total = 0;
  let i = 1;
  while (i <= n) {
    total = total + i;
    i++;
  }
  console.log(total);
}

sum(19);

// More examples - while, do...while, for, Nested loops

// using a whie loop to continuously monitor the status of a background task and check if it is complete.
let taskComplete = false;

function checkTaskStatus() {
  // Simulate checking task status
  const status = Math.random() < 0.2;
  console.log(status ? "Task complete." : "Task still running.");
  return status;
}

while (!taskComplete) {
  taskComplete = checkTaskStatus();
}

// using a do...while loop to attempt reconnection to a WebSocket server until a successful connection is established.
let isConnected = false;
let attempts = 0;
const maxAttempts = 5;

do {
  console.log(`Attempt ${attempts + 1} to connect to WebSocket server...`);
  isConnected = connectToWebSocket();
  attempts++;
} while (!isConnected && attempts < maxAttempts);

function connectToWebSocket() {
  // Simulate connection attempt
  const success = Math.random() < 0.2;
  console.log(success ? "Connected!" : "Failed to connect.");
  return success;
}

// iterate through a product list
const products = [
  { name: "Shirt", price: 25.99 },
  { name: "Hat", price: 19.5 },
  { name: "Jeans", price: 59.95 },
];

for (const product of products) {
  console.log(`${product.name}: $${product.price.toFixed(2)}`);
}

// create a multiplication table

function createMultiplicationTable() {
  for (let i = 1; i < 13; i++) {
    for (let j = 1; j < 13; j++) {
      console.log(`${j} x ${i} = ${i * j}`);
    }
  }
}

createMultiplicationTable();
