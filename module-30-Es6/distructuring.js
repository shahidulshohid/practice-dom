// const actor = {
//     name:'ananta',
//     age:'30',
//     phone: '01738284267',
//     money: 421245
// }

// console.log(actor.name)
// console.log(actor.phone)

// const {name,phone:mobile, money:taka} = actor;
// console.log(name, mobile, taka)

// array distructuring 
// const numbers = [66, 44];
// const [first, second] = numbers;
// const [x, y] = [10, 15];
// console.log(x, y)
// console.log(first, second)


// function doubleThem(a, b){
//     return [a*2, b*2];
// }
// const [prothom, ditiyo] = doubleThem(5, 10);
// console.log(prothom, ditiyo)

function getArray(a, b){
    return [a*3, b*3];
}
const [first, second] = getArray(5, 10)
console.log(first, second);
