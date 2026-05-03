// While Loop in JavaScript
// 1.Write a program to print numbers from 1 to 5
// using a while loop.
{
  console.log("question no.1");
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}
// 2.Write a program to print numbers from 5 to 1
// using a while loop.
{
  console.log("question no.2");
  let i = 5;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}
// 3.Write a program to print numbers starting
// from 2 and keep adding 2 while the number
// becomes less than 11.

{
  console.log("question no.3");
  let i = 2;
  while (i < 11) {
    console.log(i);
    i = i + 2;
  }
}
// 4.Write a program to calculate the sum of
// numbers from 10 to 5 using a while loop.

{
  console.log("question no.4");

  let i = 10;
  let sum = 0;

  while (i >= 5) {
    sum = sum + i;
    i--;
  }

  console.log("Sum =", sum);
}
// 5.Create a while loop and explain the role of
// initialization, condition, and increment in it.
// 6.Write a loop and trace its execution step-bystep (initialization → condition → work →
// update → repeat).
{
  let i = 1;
  while (i <= 3) {
    console.log(i);
    i++;
  }
}

// 7.Create a loop where the condition is false at
// the beginning and explain what happens.

// ans string me false hai

// 8.Write a loop and explain what happens if the
// variable is not updated inside the loop.
let i = 1;
while (i <= 5) {
  console.log(i);
}

// output infinite l;oop 
// 9.Create a loop and explain when and why it
// becomes an infinite loop.
// let i = 1;
// while(i > 0) {
//     console.log(i);
//     i++;
// }

// loop dosent stop

// 10. Write a loop and explain how the condition
// controls the stopping of the loop.
{
  console.log("question no.10");
  // Condition controls when loop stops
  // Loop runs WHILE condition is true
  // Loop STOPS when condition becomes false
  let x = 1;
  while (x <= 3) {
    console.log("x =", x); // prints 1, 2, 3
    x++; // x becomes 4
    // now condition (x <= 3) becomes false, loop stops
  }
  console.log("Loop stopped because x > 3");
}

// 11. Create a loop and explain how changing
// increment to decrement affects the
// execution.
{
  console.log("question no.11");
  
  // Example with INCREMENT (++)
  console.log("With INCREMENT:");
  let a = 1;
  while (a <= 3) {
    console.log("a =", a);
    a++; // increases: 1 -> 2 -> 3 -> 4 (stops)
  }
  
  // Example with DECREMENT (--)
  console.log("With DECREMENT:");
  let b = 3;
  while (b >= 1) {
    console.log("b =", b);
    b--; // decreases: 3 -> 2 -> 1 -> 0 (stops)
  }
  console.log("Increment goes UP, Decrement goes DOWN");
}

// 12. Write a loop and explain how many times it
// will run based on the condition.
{
  console.log("question no.12");
  
  // Example 1: runs 5 times
  console.log("Example 1: runs 5 times");
  let count = 1;
  while (count <= 5) {
    console.log("Run", count); // runs 5 times (1,2,3,4,5)
    count++;
  }
  
  // Example 2: runs 3 times
  console.log("Example 2: runs 3 times");
  let n = 0;
  while (n < 3) {
    console.log("Iteration", n); // runs 3 times (0,1,2)
    n++;
  }
  
  // How many times?
  // Start = 1, End = 5, runs 5 times
  // Start = 0, End < 3, runs 3 times
  // Formula: count = end - start (approx)
}
