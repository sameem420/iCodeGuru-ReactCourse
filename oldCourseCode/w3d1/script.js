// let name = "ALI";
// let name1 = "Bilal"
let name2 = "Hazaifa"
           
let names = ['ALI', 'Bilal', 'Hazaifa', 'Faheem']


console.log(names[1]);

names[1] = 'Usman'

console.log(names[1])

console.log("Length of the Array " , names.length)

console.log("SORT ", names.sort())

                
// for(let i=0; i < names.length; i++) {
//     console.log(names[i] + "\n");
// }

names[4] = 'Bazil'

for(let name in names) {
    console.log(name)
}

console.log(Array.isArray(name2))

let nums = [1,2,3,4,5]

// console.log(nums.toString())

// console.log(nums.join(' '))

// console.log(names.pop())

// names.push('Umer')
// names.shift()

names.unshift('Umer')

console.log(names)

// delete nums[2]

names.splice(2,0, "Lemon", "Kiwi");

console.log(names)

let fNames = names.slice(1,3)

console.log(fNames)
// console.log(names.concat(nums))



