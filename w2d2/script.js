for(let i=1; i<=5; i++) {
    
    if(i == 3)    
        continue;

    console.log(i);    
}


// let n = 5; // you can take input from prompt or change the value
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "<br>";
// }
// document.write(string);


let Car = {
    name : "Ford",
    model : 2010,
    greetings : function() {
        document.write(this.name + " is my favorite car.Its model is " + this.model + "<br>");
    }
}

let Person = {
    name : "Ali",
    age : 20,
    greetings : function() {
        document.write("Welcome " + this.name + " His age is " + this.age);
    },
    Name : {
        name : "Ali",
        age : 20,
    }
}

console.log(Car.greetings())
console.log(Person.greetings())

// function PrintMyName(name1, name2) {
//     document.write(name1 + " " + "is a good student <br>");
//     return name2
// }

// let name1 = "Bazil";
// let name2 = "Ali";
// let name3 = "Bilal"

// console.log(PrintMyName(name1, name2));
// console.log(PrintMyName(name2));
// console.log(PrintMyName(name3));
