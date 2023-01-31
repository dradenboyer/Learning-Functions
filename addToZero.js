// Starting array
let arrayOne = [28, 43, -12, 30, 4, 0, 12]
let arrayTwo = [0, ,21, 33, 6, 0, -9]
let arrayThree = [0, 1, 2, 3, 4, 5]
// Write your solution below:
// function array(x,y)
// {
//     return ((x == 0 || y == 0 || x + y == 0));
// }
// console.log(test0(array,array))

// const compare = (array,array) =>
// array.length == array.length &&
// a1.every(
//     (element, index) => element === array[index]
// );

// console.log(compare(array, array));

// for( i = 0; i < array1.length; i++){
//     if(array1[i] != 0)
//     return "False";
//     return "True";
// }

// let number = false
// for (i = 0; i< array.length; i++){
//     for (let j=0; j < array.length; j++){
//         console.log(array[i],array[i + j + 1])
//         if(array[i] + array[i+j+1] === 0){
//             number = true
//         }
//     }
// }

// for(let i = 0; i<10; i++){
//     for(let j = 0; j < 10; j++){
//         console.log("the value of i: ",i, "The value of j:",j)
//     }
// }
   
const addToZero = arr => {
    for(let i = 0; i < arr.length; i++){
    for(let j =0; j < arr.length; j++){
        let iValue =arr[i]
        let jValue =arr[j]
        if(iValue + jValue === 0){
            return true
        }
    }
    }
    return false
}

console.log(addToZero(arrayOne))
console.log(addToZero(arrayTwo))
console.log(addToZero(arrayThree))