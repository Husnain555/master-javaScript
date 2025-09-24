// // object literal {}
//
// const person = {
// name : "John",
//     age : 20,
// }
// console.log(person.name)
//
// // object.create
//
// let me = Object.create(person)
// console.log(me)    // now me is also an object
//
//
// // object constractor
//
// let mySelf = new Object()     // or we can simply add {}
// mySelf.name = "Husnain"
// mySelf.age = 20
// console.log(mySelf)


// class person {
//     constructor() {
//         this.name = "person";
//         this.age = 19;
//
//     }
// }
// const p = new person();
//
// console.log(p,'person');
//
// const newPerson = new Object()      // same as using newpweson = {}
//
//
// object creation

// const car = {
//     name: "BMW",
//     model:1965
// }
// const carMachanic = {
//     name: "Husnain",
//     age : 25
// }
// const company = Object.create(car,carMachanic);
// console.log(company)
//
//
const person = {
    name : "John",
}
// Object.defineProperty(person, 'b',{
//     value:1,
//     enumerable:true,
// })
//
// for(let p in  person){
//     console.log(p)
//     console.log(person[p]);
// }


// functional constructor


function setName (name){
    this.name = name;
}

const husnain = new setName("husnain");
console.log(husnain.name);

