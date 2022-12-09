// Print even number from 1 to 100
// let i 
// for (i=1;i<=100;i++)
// {
//   if(i%2==0){
//     console.log(i)
    
//   }
// }

// Print odd number from 20 to 40
// let i
// for(i=10; i<=20; i++){
//     // let's divide the value by 2
//     // if the remainder is not a zero then it's an odd number
   
//     if(i % 2 != 0){
//       console.log(i);
//     }
//   }

//Print prime numbers from 1 to 100 

// for (var i = 0; i <= 100; i++) {
//     var notPrime = false;
//     for (var y = 2; y <= i; y++) {
//         if (i%y===0 && y!==i) {
//             notPrime = true;
//        }

//     }
//     if (notPrime === false) {
//          console.log(i);
//     }
// }

// Sum of natural numbers
// let sum = 0, i = 1;
// // looping from i = 1 to number
// while(i <= 100) {
//     sum += i;
//     i++;
// }
// console.log('The sum of natural numbers:', sum);


// sum of odd number
// var x=10;
// var sum =0;
// for (var i=1;i<=x;i++){
//   if(i%2 !== 0){
//     sum =sum+i;
//   }
// }
// console.log(sum);

// sum of even numbers
// var x=10;
// var sum =0;
// for (var i=1;i<=x;i++){
//   if(i%2 == 0){
//     sum =sum+i;
//   }
// }
// console.log(sum);

// string reversal
// const str="Hello"
// //console.log(str.length)
// let revstr=''
// for(let i=str.length-1;i>=0;i--)
// {
//     revstr += str[i]
// }
// console.log(revstr)

// fibonacci
// let a=0,b=1,c
// console.log(a)
// console.log(b)
// for(i=1;i<=6;i++)
// {
//     c=a+b//0+1=1
//    console.log(c)//1
//     a=b;//0=>1
//     b=c//1=>1
// }

// program to check if the string is palindrome or not
// let str = "civic";
// let strReverse = str.split("").reverse().join("");//String.split() method allows you to split a string into an array, 
// //Array.reverse() method will reverse the array
// //Array.join() method will convert your array back into a string.
// if (str === strReverse) {
//   console.log("The string is a palindrome");
// } else {
//   console.log("NOT a palindrome");
// }

//Program Factorial
// var number = 5
// if (number < 0) {
//     console.log('Error');
// }
// // if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(fact);   //Output: 120
// }


//Armstrong
// const number = prompt("Enter a positive integer");
// const numberOfDigits = number.length;
// let sum = 0;

// // create a temporary variable
// let temp = number;

// while (temp > 0) {

//     let remainder = temp % 10;

//     sum += remainder ** numberOfDigits;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }

// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

//Program sorting

// var names = [ "Sowjanya", "Anitha", "Priyanka", "Akhila"];
// returns the sorted array
// console.log(names.sort());
// modifies the array in place
//console.log(names);

//Swapping

// let a=10,b=14,temp
// temp=a
// a = b
// b = temp
// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`)

//findSecondLargestElem

// function findSecondLargestElem(arr){
//     let first = -1 , second = -1;

//     for(let i = 0; i <= arr.length-1; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         }
//         else if( arr[i] > second && arr[i] != first){
//             second = arr[i];
//         }
//     }
//     console.log(second);
// }
// let arr = [12, 35, 1, 10, 34, 1]
// findSecondLargestElem(arr);

//Generating 5 random integers in range of 1 to 5

// console.log("Generating 5 random integers in range of 1 to 5")
// for (let i = 0; i < 5; i++) {
//   var randNum =  Math.floor(Math.random() * 5) + 1;
//   console.log(randNum)
// }

// program to find the largest among three numbers

// const num1 = 15;
// const num2 = 25;
// const num3 = 68;
// let largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// console.log("The largest number is " + largest);

