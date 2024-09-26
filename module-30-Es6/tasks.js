
// problem solve 1 ==========================
// const multiplay = (num1, num2, num3) =>{

//     const result = num1 * num2 * num3;
//     return result;
// }
// console.log(multiplay(5,7,8))


//problem solve 2============================
// const threeLines = `I am webdevelopr,
// I love to code,
// I love to eat briani
// `;
// console.log(threeLines)

// problem solve 3 ===========================
// function add(a, b = 20){
//     const result = a + b;
//     return result;
// }
// console.log(add(50));

// problem solve 4 =============================
// const friends = ['shahidul', 'alamin', 'muktar', 'alim', 'korim','babul'];
// let newArray = [];
// for(const item of friends){
//     if(item.length % 2 === 0){
//         newArray.push(item)
//     }
// }
// console.log(friends.length)
// console.log(newArray)
// console.log(newArray.length)

//problem solve 5 ==============================
const numbers = [2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0;
for(const item of numbers){
    const square = item * item;
    sum += square / numbers.length;
}
console.log(sum)

const returnAvarage = (arr)=>{
    let sum = 0;
    for(const item of arr){
        const square = item * item;
        sum += square;
    }
    const average = sum / numbers.length;
    return average;
}
const result = returnAvarage(numbers)
console.log(result)

// const num1 = [34, 44, 54, 64, 74, 84];
// const num2 = [6, 4, 3, 7, 8, 9, 100]
// const newArray = [...num1, ...num2];
// const max = Math.max(...newArray)
// const min = Math.min(...newArray)
// console.log(max)
// console.log(min)



