// function allTheArgs(func, ...args) {
 
//   return func.bind(args, ...args) // what do 'args' and '...args' refer to?
// }

// function sum(...nums) {
//   return nums.reduce((acc, num) => acc + num);
// }

// const onePlusTwo = allTheArgs(sum, 1, 2);

// const onePlusTwoPlusThree = onePlusTwo(3);
// const onePlusTwoPlusFour = onePlusTwo(4);

// console.log(onePlusTwoPlusThree); // => 6
// console.log(onePlusTwoPlusFour);  // => 7

// /*****************************************************************************/
// /***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

// module.exports = allTheArgs;

const obj1 = {name: 'Jesse'} 
const obj2 = {age: 32}

function printer(...args) {
  // console.log(this.name)
  console.log(args)
}

// const func = printer.bind(obj1)
// const func = printer.bind(null, 1, 2, 3)
const func = printer.bind(null, 1)(2, 3)