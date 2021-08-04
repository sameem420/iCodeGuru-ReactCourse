const numbers = [45, 4, 9, -5, -3, 16, 25];
const fruits = ['Banana', 'Mango', 'Apple', 'Kivy', 'Grapes']

const over18 = numbers.filter((val, idx) => {
    return val > 18;
});
 

// function myFunction(value, index, array) {
//     return value > 18;
// }

const sum = numbers.reduceRight((total, val, index) => {
    // console.log(total)
    return total + val
})


let allOver18 = numbers.every((val, idx) => {
    return val > 18;
});

let someOver18 = numbers.some((val, idx) => {
    return val > 18;
});

let position = fruits.indexOf('Kivy')

let elementPresent = fruits.includes('Mango')
if(elementPresent) {
    console.log("Thank you")
}


let first = numbers.findIndex((val, idx) => {
    return val < 0
});


let myArray = Array.from('12345')
// let str = "ABCDEF"
// for(let char of str) {
//     console.log(char)
// }
const keys = fruits.keys()

for(let x of keys) {
    console.log(x)
}

console.log(keys)
  