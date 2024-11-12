// Write a program to calculate the change to be dispensed from a vending machine.
// The machine accepts a single dollar bill.
// The items in the machine cost between 5 cents and 1 dollar, in 5-cent increments (5, 10, 20, 25, 30, 35, . . . 90, 95, or 100). 

/// Example:
// Price of item: 35 cents
//Display: 
//You bought an item for 35 cents and gave me a dollar, so your change is: 
//2 quarter(s)
//1 dime(s)
//1 nickel(s)

// 1) Homework- description
// 2) Use a console.log to print in the console the solution
// 3) Upload your file to your repository
// 4) Submit the link to your homework

// Final Answer! | Attempt #2
// Professor's hint: use modular in a variable
// NOTE: I searched for the written explanation and wrote the code in javascript to follow the explanation.

const itemPrice = 
    [1.00, 0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65, 0.60, 0.55, 
     0.50, 0.45, 0.40, 0.35, 0.30, 0.25, 0.20, 0.15, 0.10, 0.05];
// console.log(itemPrice.length);

/// See Explanation here: https://brainly.com/question/40799829
//  To calculate the change to be dispensed from a vending machine,
//  you can subtract the price of the item from the dollar bill.
//  Then, divide the remaining change by the value of each coin and note how many of each coin is needed.

console.log( "You bought an item that costs " + itemPrice[13] + " and inserted 1 dollar, so your change is");

//  For example, if the item costs 35 cents and the customer paid with a dollar, the change is calculated as follows:

//1. Subtract the price of the item ($0.35) from the dollar bill ($1.00) to get $0.65.
// console.log(1.00-itemPrice[13]);
/// 0.65

//2. Divide $0.65 by the value of a quarter ($0.25) to get 2 quarters and a remainder of $0.15.
let totalChange = 1.00-itemPrice[13];
// 0.65
// console.log(totalChange/0.25);
/// 2.6 meaning 2 quarters
// console.log(totalChange%0.25);
/// 0.15 meaning we ended up with the remainder 0.15 before we got to the 0.6 in 2.6 if you write it out in long division.

if (totalChange/0.25 >= 3.00) {
    console.log("3 quarter(s)");
    } else if (totalChange/0.25 >= 2.00) {
        console.log("2 quarter(s)");
    } else if (totalChange/0.25 >= 1.00) {
        console.log("1 quarter");
    }
//3. Divide the remainder ($0.15) by the value of a dime ($0.10) to get 1 dime and a remainder of $0.05.
let remainder1 = 0.15%0.25
/// 0.15
// console.log(remainder1/0.10);
/// 1.50 meaning 1 dime
// console.log(remainder1%0.10);
/// 0.05 rounded up from 000000000000002 meaning we ended up with the remainder of 0.05 before we got to the .5 in 1.5 if you write it out in long division.

if (remainder1/0.10 >= 3.00) {
    console.log("3 dimes(s)");
    } else if (remainder1/0.10 >= 2.00) {
        console.log("2 dime(s)");
    } else if (remainder1/0.10 >= 1.00) {
        console.log("1 dime");
    }

//4. Finally, divide the remaining $0.05 by the value of a nickel ($0.05) to get 1 nickel.
let remainder2 = 0.05%0.10;
/// 0.05
// console.log(remainder2/0.05);
/// 1.00 meaning 1 nickel
// console.log(remainder2%0.05);
/// 0 meaning no remainder

if (remainder2/0.05 >= 1.00) {
    console.log("1 nickel");
}
//5. Therefore, for a purchase of 35 cents, the change would be 2 quarters, 1 dime, and 1 nickel.


// Initial Answer | Attempt #1
let price = 0.35;
if (price >= 1.00) {
    console.log("You bought an item for 1 dollar and inserted a dollar, so your change is:\nno change");
} else if (price >= 0.95) {
    console.log("You bought an item for 95 cents and inserted a dollar, so your change is:\n1 nickel");
} else if (price >= 0.90) {
    console.log("You bought an item for 90 cents and inserted a dollar, so your change is:\n1 dime");
} else if (price >= 0.85) {
    console.log("You bought an item for 85 cents and inserted a dollar, so your change is:\n1 dime\n1 nickel");
} else if (price >= 0.80) {
    console.log("You bought an item for 80 cents and inserted a dollar, so your change is:\n2 dime(s)");
} else if (price >= 0.75) {
    console.log("You bought an item for 75 cents and inserted a dollar, so your change is:\n1 quarter");
} else if (price >= 0.70) {
    console.log("You bought an item for 70 cents and inserted a dollar, so your change is:\n1 quarter\n1 nickel");
} else if (price >= 0.65) {
    console.log("You bought an item for 65 cents and inserted a dollar, so your change is:\n1 quarter\n1 dime");
} else if (price >= 0.60) {
    console.log("You bought an item for 60 cents and inserted a dollar, so your change is:\n4 dime(s)");
} else if (price >= 0.55) {
    console.log("You bought an item for 55 cents and inserted a dollar, so your change is:\n4 dime(s)\n1 nickel");
} else if (price >= 0.50) {
    console.log("You bought an item for 50 cents and inserted a dollar, so your change is:\n2 quarter(s)");
} else if (price >= 0.45) {
    console.log("You bought an item for 45 cents and inserted a dollar, so your change is:\n2 quarter(s)\n1 nickel");
} else if (price >= 0.40) {
    console.log("You bought an item for 40 cents and inserted a dollar, so your change is:\n2 quarter(s)\n1 dime");
} else if (price >= 0.35) {
    console.log("You bought an item for 35 cents and inserted a dollar, so your change is:\n2 quarter(s)\n1 dime\n1 nickel");
} else if (price >= 0.30) {
    console.log("You bought an item for 30 cents and inserted a dollar, so your change is:\n2 quarter(s)\n2 dime(s)");
} else if (price >= 0.25) {
    console.log("You bought an item for 25 cents and inserted a dollar, so your change is:\n3 quarter(s)");
} else if (price >= 0.20) {
    console.log("You bought an item for 20 cents and inserted a dollar, so your change is:\n3 quarter(s)\n1 nickel");
} else if (price >= 0.15) {
    console.log("You bought an item for 15 cents and inserted a dollar, so your change is:\n3 quarter(s)\n1 dime");
} else if (price >= 0.10) {
    console.log("You bought an item for 10 cents and inserted a dollar, so your change is:\n3 quarter(s)\n1 dime\n1 nickel");
} else if (price >= 0.05) {
    console.log("You bought an item for 5 cents and inserted a dollar, so your change is:\n3 quarter(s)\n2 dime(s)");
}
