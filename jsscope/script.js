// Practice Questions — JavaScript Scope
// 1.Declare a  it.
{
  console.log("question no. 1");
  let i = 12; //global variable
  console.log(i); //global variable and print
}

// 2.Declare a global variable and access it inside a
// function.
console.log("question no.2");

let call = "hello i am full stack developar"; //globl variable
function showcall() {
  //accessing global variable
  console.log(call);
}
showcall(); //function call

// 3.Create a function and declare a local variable
// using var, then print it inside the function.
console.log("question no.3");
// function class(){
//     var teacher="hello vishal";
//     console.log(teacher);

// }
// class();
// console.log(teacher);
function classRoom() {
  var teacherName = "Mr. Sharma";
  console.log(teacherName); // Accessible here
}
classRoom();
console.log(teacherName); // Error

// 4.Try to access a local variable outside the
// function and observe the error.
console.log("question no.4");
function test() {
  let x = 50; //local variable
  console.log(x); //inside function
}
test();
console.log(x); // outside function

// 5.Create a function and declare a variable inside
// an if block using let, then print it inside the
// block.

// 6.Try to access the let variable outside the block
// and observe the error.

// 7.Declare a variable using const inside a block
// and print it inside the block.

// 8.Try to access the const variable outside the
// block and observe the error.

// 9.Create a program with:
// • one global variable
// • one local variable
// • one block variable
// and print them where accessible.

//  10. Write a program to demonstrate:
// • var works inside entire function
// • let and const work only inside block { }
