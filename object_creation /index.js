// object literal {}

const person = {
name : "John",
    age : 20,
}
console.log(person.name)

// object.create

let me = Object.create(person)
console.log(me)    // now me is also an object


// object constractor

let mySelf = new Object()     // or we can simply add {}
mySelf.name = "Husnain"
mySelf.age = 20
console.log(mySelf)





