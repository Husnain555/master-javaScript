// function a() {
//     console.log(b)
//    d: function b() {
//         console.log(c)
//     }
// }
// var b = 12;
// var c = 3;
// a();


// in more better way we follow mozillla doc example

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();
