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

// 2.Write a program to check if a number is greater
// than 10. If true print "Greater", else print
// "Smaller".

{
  console.log("question no.2");
  let i = 15;
  if (i > 10) {
    console.log("greater");
  } else {
    console.log("smaller");
  }
}
{
  // 3.Write a program to check if a number is even
  // or odd.
  console.log("question no.3");
  let i = 10;
  if (i % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}
// {
// 4.What is the role of else in JavaScript?
//   console.log("question no. 4");

//   if (condition) {
//     // Condition agar sahi ho tab if (){}use karte hai
//   } else {
// condition galat ho tab
//   }
// }

//5.Write a program to check voting eligibility (age
// ≥ 18 → eligible, else not eligible).

{
  console.log("question no. 5");

  let age = 2;
  if (age >= 18) {
    console.log("eligible");
  } else {
    console.log("not eligible");
  }
}

// 6.Write a program to simulate a traffic signal (if
// green → go, else → stop).
{
  console.log("question no.6");
  let signal = "red";
  if (signal === "green") {
    console.log("go");
  } else {
    console.log("stop");
  }
}

// 7.Write a program to check if a number is
// positive or not.

{
  console.log("question no.7");
  let i = -10;
  if (i > 0) {
    console.log("positive number");
  } else {
    console.log("not positive number");
  }
}
// 8.Write a program to check if a number is
// divisible by 2 using condition.

{
  console.log("question no.8");
  let i = 10;
  if (i % 2 == 0) {
    console.log("number is divisible by 2");
  } else {
    console.log("not divisible by 2");
  }
}
// 9.What happens when the condition
// in if statement is false and there is
// an else block?

{
  console.log("question no.9");
  let condition = true;
  if (condition) {
    console.log("if block executed");
  } else {
    console.log("else block executed");
  }
}
// 10. Write a program and explain which block will
// execute when condition is true and when it is
// false.
{
  console.log("question no.10");
  let num = 5;

  if (num > 0) {
    console.log("This block runs when condition is TRUE");
  } else {
    console.log("This block runs when condition is FALSE");
  }
}
// 11. Create a program and trace its execution
// step-by-step (condition → execution).

{
  console.log("question no.11");

  let num = 3;

  if (num % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}
// 12. Write a program to check a condition using
// comparison operators and print the result.
