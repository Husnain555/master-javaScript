// function declaration
function add(a, b) {
    return a + b;
}
add(2, 3);

// function expression

const multiply = function (a, b) {
    return a + b;
}
multiply(2, 3);


// arrow function expression

const divide = (a, b) => a + b;
divide(2, 3);

// function constractor

const add2 = new Function ("a,b","return a+b")
const result = add2(2, 3);
console.log(result);

// IIFE Function immediate invoked function expression

(function (){
    console.log("server is running on port 3232");
})();

// Generator function

function* reg(num){
    while (true){
        yield num
        yield num+10;

    }
}
const newGenerator = reg(7)
console.log(newGenerator.next().value);
console.log(newGenerator.next().value);
console.log(newGenerator.next().value);
console.log(newGenerator.next().value);


// Anonymous Function

let number = [1,2,3,4,5,6,7,8,9].map((n)=> n*n)
console.log(number);



// Recursive function
// A function which calls itself

function recursive (num){
    if (num === 0 || num === 1) return 1
    return num * recursive(num-1)
}

console.log(recursive(100))

// High order function

function operate(FunctionName,a,b){
    return FunctionName(a,b)
}

const testOperate = operate(add,3,4)
console.log(testOperate)






