const getAge = person => person.name;
const person = {name:'shahidul islam', age:50}
// console.log(getAge(person))

const getAge2 = person => person.age ;
// console.log(getAge2(person));

const multiply = numbers => numbers[2] * 2 ;
const numbers = [33,44,5,66,3];
// console.log(multiply(numbers))


const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
}
console.log(doMath(5,6,7))