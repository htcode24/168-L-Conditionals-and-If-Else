/*
Write a program to calculate the change to be dispensed from a vending machine.
The machine accepts a single dollar bill. 
The items in the machine cost between 5 cents and 1 dollar, in 5-cent increments (5, 10, 20, 25, 30, 35, . . . 90, 95, or 100). 

Example:
Price of item: 35 cents
Display: 
You bought an item for 35 cents and gave me a dollar, so your change is: 
2 quarter(s)
1 dime(s)
1 nickel(s)
*/

// Step 1: Create the base variables
const itemPrice = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5];
let change = 100 - itemPrice[13];
// Manually select which item you bought by changing the index number selected in the array of variable itemPrice. Note: First number starts with 0.
// Be sure to change the index number in the console.log statement below on row 44.

// Step 2: Calculate the change in quarters
let quarter = Math.floor(change/25);
let quarterDifference = change%25;
let totalQuarters = quarter + " quarter(s)";

// Step 3: Calculate the change in dimes
let dime = Math.floor(quarterDifference/10);
let dimeDifference = quarterDifference%10;
let totalDimes = dime + " dime(s)";

// Step 3: Calculate the change in nickels
let nickel = Math.floor(dimeDifference/5);
let nickelDifference = dimeDifference%5;
let totalNickels = nickel + " nickel(s)";

// Print to the console:
/*
You bought an item for 35 cents and gave me a dollar, so your change is: 
2 quarter(s)
1 dime(s)
1 nickel(s)
*/

console.log("You bought an item for " + itemPrice[13] + " cents and gave me a dollar, so your change is:");
console.log(totalQuarters);
console.log(totalDimes);
console.log(totalNickels);