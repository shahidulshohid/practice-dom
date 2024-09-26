const max = Math.max(50, 66, 33, 66, 77, 90)
// console.log(max)

const numbers = [33, 44, 5, 22, 77, 99];
const arrayMax = Math.max(...numbers)
// console.log(arrayMax)

const friends = [44, 55, 66, 33];
const bondhu = friends;
const dosto = [...friends]
dosto.push(200)


// console.log(bondhu)
// console.log(friends)
// console.log(dosto)

const sonkha = [...friends, 400, 500]
// console.log(sonkha);

const listOfNumbers = [3, 4, 5, 6,7, 3, 22, 2,]
copyFromLIstOfNumbers = [...listOfNumbers, 400, 500]
copyFromLIstOfNumbers.push(90)
console.log(listOfNumbers)
console.log(copyFromLIstOfNumbers);



