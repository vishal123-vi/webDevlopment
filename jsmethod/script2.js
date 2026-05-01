const abc = function () {
  console.log("hello world");
};
// console.log(abc);

console.log(abc);

abc();

//  arrow funcrion
const arrowfun = () => {
  console.log("hello");
};
arrowfun();
//   type 2
const addarrowfun = (a, b) => {
  return a + b;
};
console.log(addarrowfun(5, 6));

// type 3
const farrowfun = (a, b) => a+b;
console.log(farrowfun(5,6));
