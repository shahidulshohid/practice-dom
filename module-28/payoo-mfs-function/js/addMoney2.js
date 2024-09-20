document.getElementById('btn-add-money').addEventListener('click', function(even){
    
    even.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number')
    console.log(addMoney, pinNumber);

    if(isNaN(addMoney)){
        alert('Failed to add money')
        return;
    }

    //wrong way to verify, don't try it at your serious website;
    if(pinNumber === 1234){

        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        //add to transaction history
        const p = document.createElement('p');
         p.innerText = `added: ${addMoney} Tk. New Balance ${newBalance}`;
        console.log(p.innerText);

        //should be a common function
        document.getElementById('transaction-container').appendChild(p)
        

    }
    else {
        alert('Fail to add money, please try again later')
    }
    
})