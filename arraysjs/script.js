// let arr = [21, 23, 234, 24,45,12,123];
// for (var i = 0; i < 7; i++) {
//   console.log(arr[i]);
// }
// console.log(arr);
// arr[2] = arr[2]+10;
// console.log(arr);
// arr=[];
// console.log(arr);

// let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// console.log(arr);
// arr.push(99);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(11);
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.at(4));

// console.log(arr.indexOf(56));

// console.log(arr.includes(12));
// console.log(arr.indexOf(12));

// let unar = [56, 23, 89, 45, 67, 34, 12, 90, 87, 45, 98];
// console.log(unar);
// unar.sort();
// console.log(unar);

// unar.reverse();
// console.log(unar);

// let arr = [21, 23, 234, 24, 45, 12, 123];
// for (var i = 0; i < 7; i++) {
//   console.log(arr[i]);
// }
// console.log("");

// ar.forEach((element) => {
//   console.log(element);
// });

// Bracket Notation or dot Notation onle work in json
// let fdata = [
//   {
//     name: "Rahul Sharma",
//     city: "Bhopal",
//     email: "rahul@gmail.com",
//     password: "12345",
//   },
//   {
//     name: "Amit Verma",
//     city: "Indore",
//     email: "amit@gmail.com",
//     password: "abc123",
//   },
//   {
//     name: "Priya Singh",
//     city: "Delhi",
//     email: "priya@gmail.com",
//     password: "priya@123",
//   },
//   {
// name: "Neha Gupta",
//     city: "Mumbai",
//     email: "neha@gmail.com",
//     password: "neha123",
//   },
//   {
//     name: "Rohit Kumar",
//     city: "Patna",
//     email: "rohit@gmail.com",
//     password: "rohit@123",
//   },
// ];
// map
// fdata.map((item,idx) => {
//   console.log(idx);

//   console.log(item["name"]);
// });

// fdata.forEach((item) => {
//   console.log(item["name"]);
// });
// console.log(fdata);
// // console.log(fdata[1]["city"]);
// // or

// console.log(fdata[1].city);

// let vishal = {
//   name: "Rohit Kumar",
//   city: "Patna",
//   email: "rohit@gmail.com",
//   password: "rohit@123",
// };
// console.log(Object.keys(vishal));
// console.log(Object.values(vishal));
// console.log(Object.entries(vishal));

// sorting the  arrays
let ar = [22, 43, 6, 74, 8, 91, 5, 23, 32, 6, 6, 6, 9, 4, 7, 92, 91];
ar.sort((a, b) => a - b);
console.log(ar);

// find function
// console.log(ar.find((val)=>val>20));
// exate
// console.log(ar.find((val) => val === 6));
// console.log(ar.findIndex((val) => val === 6));
// console.log(ar.findLastIndex((val) => val === 6));

// console.log("filter");

// let ar2 = [22, 43, 6, 74, 8, 91, 5, 23, 32, 6, 6, 6, 9, 4, 7, 92, 91];  
// console.log(ar2.filter((val) => val > 20)); //filter all number show the the grater than 20
// console.log(ar2.find((val) => val > 20)); //find= me sirp oohi numer grater dikhayega jo othh index pe ho

// slice 
// console.log(ar2.slice(0,7));

let ab ="this is web dev"
console.log(ab);

console.log(ab.split(" "));
console.log(ab.split(" "));



