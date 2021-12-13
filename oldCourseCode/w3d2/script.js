// let name = "ALI";
// let name1 = "Bilal"


// (function () {
//     console.log("Welcome to GeeksforGeeks!");
// })();


let name2 = "Hazaifa"
           
let names = ['ALI', 'Bilal', 'Hazaifa', 'Faheem']

console.log(names.sort().reverse())



const points = [40, 100, 1, 5, 25, 10,150];
                    
// points.sort(function(a, b) {
//     console.log(a , b)
//     return a - b
// });

console.log(Math.floor(Math.random() * 10))

console.log(Math.min(...points))

console.log(points)


// function Sum() {
//     return ;
// }

// let Sum = function() {

// }

// const Sum = (a,b) => { 
//     return 5 + 10;
// }

points.forEach((value, index) => {
    console.log(value * 2)
})


names.map(function(val, index)  {
    console.log(val)
})
// console.log(Sum())



