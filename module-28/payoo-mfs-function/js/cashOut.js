document.getElementById('btn-cash-out').addEventListener('click', function(even){

    even.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if(isNaN(cashOut)){
        alert('Failed ot cash out.');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        
        
    if(cashOut > balance){
        alert('You do not have enough money to cash out')
        return;
    }
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        //add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-500');
        div.innerHTML = `
        <h4 class='text-2xl font-bold'>Cash Out</h4>
        <p>${cashOut} withdraw. New Balance ${newBalance}
        `;

        document.getElementById('transaction-container').appendChild(div)
        
    }
    else {
        alert('Fail to cash out money, please try again later')
    }
    
})