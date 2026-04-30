// positive
// let n = 5;
// if (n > 0) {
//   console.log("positive Integer");
// } else {
//   console.log("negative Integer");
// }

console.log("question no.2");
let age = 10;
if (age < 20) {
  console.log("not eligible");
} else {
  console.log("eligible");
}

// let  n=13;
// if(n>0)
// {
//     console.log("even number")
// }
// else{
//     console.log("not even number")
// }

// let n=x;
// if(n<90)
// {
//     console.log("A")
// }
// if(n>75)
// {
//     console.log(B)
// }
// if(n>50)
// {
//     console.log("pass")
// }
// else{
//     console.log(n>30)

// }

// let usr = "abcd"
// let pass="12345"
// if(user === "abcd" && pass==="12345")
// {
//     console.log("login succes")

// }
// else{
//     console.log("not login")
// }

//  short hand

let a = 2,
  b = 6;
console.log(a > 2 || b < 3);
let data;
let name = "";
data = name || "n/A";
console.log(data);

// example
let x = 20;
console.log(x > 10 && y < 5);

// switch
let choice = 1;
let choice;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("lassi");
    break;
  }
  default: {
    console.log("panni");
  }  
}
