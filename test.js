// jsvu v8 engine
  
const myArr = []
// %DebugPrint(myArr)

// continious, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo  = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

// console.log(arrTwo);
// console.log(arrTwo.length);
// console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

// const arrThree = [1,2,3,4,5]
// console.log(arrThree[2]);

// SMI > DOUBLE > PACKED             // continious
// H_SMI > H_DOUBLE >H_PACKED        // holey

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1')   //PACKED_ELEMENT
arrFive.push('2')   //PACKED_ELEMENT
arrFive.push('3')   //PACKED_ELEMENT


const arrSix = [1,2,3,4,5]

arrSix.push(NaN)

// for, for-of, forEach









const numbers = [1,2,3,4,5]
const result = numbers.some(num => num >2) && 
               numbers.every(num => num < 6);
console.log(result);

console.log(null/null);

console.log([10] == 10);

let arr = [1,2,3]
for(let i in arr){
    console.log(i); // This will log: 0, 1, 2
}

let arr1 = [1,2,3]
for (let value of arr1) {
    console.log(value);  // This will log: 1, 2, 3
}