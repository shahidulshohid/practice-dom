document.getElementById('btn-add-money').addEventListener('click', function(even){
    
    even.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number')
    console.log(addMoney, pinNumber);

    //wrong way to verify, don't try it at your serious website;
    if(pinNumber === 1234){
        console.log('you can add your money')
    }
    else {
        alert('Fail to add money, please try again later')
    }
    
})