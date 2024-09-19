document.getElementById('btn-cash-out').addEventListener('click', function(even){

    even.preventDefault();
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut)
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    // console.log(cashOut, pinNumber);

    //wrong way to verify pin number 
    if(pinNumber === '1234'){
        
        // console.log('getting pin number very clearly')

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance)

        //reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        // console.log(newBalance);
        //update the ui
        document.getElementById('account-balance').innerText = newBalance;
        
    }
    else {
        alert('Fail to cash out, please try again later')
    }
    
})