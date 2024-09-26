
// problem solve 1 ===========================
function calculateTax(income, expenses){
    if(income < 0 || expenses < 0 || expenses > income){
        return 'Invalid Input'
    }
    const saving = income - expenses;
    const tax = saving * .20;
    return tax;
}
// console.log(calculateTax(10000, 3000))
// console.log(calculateTax(34000, 1753))
// console.log(calculateTax(5000, 1500))
// console.log(calculateTax(7000, 7000))
// console.log(calculateTax(-5000, 200))
// console.log(calculateTax(6000, -1500))

// problem solve 2 ======================
function sendNotification(email){
    if(email.split('').indexOf('@') === -1){
        return 'Invalid Email'
    }
    // if(email.split('').includes('@') === false){
    //     return 'Invalid Email'
    // }
    let emailArr = email.split('@');
    let notification = `${emailArr[0]}  sent you an email from ${emailArr[1]}`
    return notification;
}

// console.log(sendNotification('zihad@gmail.com'))
// console.log(sendNotification('farhan34@yahoo.com'))
// console.log(sendNotification('fahim234.hotmail.com'))
// console.log(sendNotification('sadia8icloud.com'))

// problem solve 3 
function checkDigitsInName(name){
    if(typeof name !== 'string'){
        return 'Invalid Input'
    }
    let nameArr = name.split('')
    for(let char of nameArr){
        if(!isNaN(char)){
            return true;
        }
    }
    return false;
}
// console.log(checkDigitsInName('Raj123'))
// console.log(checkDigitsInName('Suman'))
// console.log(checkDigitsInName('Name2024'))
// console.log(checkDigitsInName('!@#'))
// console.log(checkDigitsInName(['Raj']))

// problem solve 4 ======================
function calculateFinalScore(obj){
    if(typeof obj !== 'object' || Array.isArray(obj)){
        return 'Invalid Input'
    }
    let totalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        totalScore += 20;
    }
    return totalScore >= 80? true : false;
}

// console.log(calculateFinalScore({name:'Rajib', testScore:45, schoolGrade:25, isFFamily:true}))
// console.log(calculateFinalScore({name:'Rajib', testScore:45, schoolGrade:25, isFFamily:false}))
// console.log(calculateFinalScore('hello'))
// console.log(calculateFinalScore({name:'Rajib', testScore:15, schoolGrade:25, isFFamily:true}))

// problem solve 5 =================================
function waitingTime(waitingTimes, serialNumber){
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input'
    }
    // calculate average time 
    let sum = 0;
    for(let time of waitingTimes){
        sum += time;
    }
    let averageTime = Math.round(sum / waitingTimes.length);
    let personLeft = serialNumber - 1 - waitingTimes.length;
    let waitingTime = averageTime * personLeft;
    return waitingTime;

}
console.log(waitingTime([3, 5, 7, 11, 6], 10))
console.log(waitingTime([13,2], 6))
console.log(waitingTime([13,2,6,7,10], 6))
console.log(waitingTime([6], 4))
console.log(waitingTime(7,10))
console.log(waitingTime('[6,2]',9))
console.log(waitingTime([7,8,3,4,5],'9'))
