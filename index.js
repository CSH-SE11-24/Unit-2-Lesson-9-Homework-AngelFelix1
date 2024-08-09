// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let user = prompt("enter a number")
user = parseInt(user)

// Prompt the user for another number that is bigger than the first number and cast it to a number
let user2 = prompt("enter a bigger number than the first one" )

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for(let i = user; i <= user2; i++){
  console.log(i)
}





// PART 2: Averaging an array
// Create an array of numbers 
let numberArray =[1,2,3,4,5]
let sum = 0
// Write a for loop that calculates the sum of the elements 
for( x = 0; x < numberArray.length; x++){
  let count  = numberArray[x]
  sum = sum + count
}
console.log("the sum of everything is", sum)





// Using the sum, calculate the average of all the elements (sum divided by the length of the array)
let average = sum / numberArray.length;
console.log("the average is",average)

