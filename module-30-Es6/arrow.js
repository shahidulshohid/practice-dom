// function declaration ===================
function add(a,b){
    return a + b;
}
// console.log(add(5, 7))

// function expression ===================
const add2 = function(a, b){
    return a + b;
}
// console.log(add2(5, 7))

//arrow function ================================
const add3 = (a, b) => a + b;
// console.log(add3(5, 7))

const add4 = a => a;
// console.log(add4(8));

const add5 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
console.log(add5(4, 5, 6, 7))
