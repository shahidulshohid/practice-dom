
/**
 * 1. add event listener to the add Money button (form submit)
 * make sure to preventDefault so that page does not reloads
 * 2. get the money user wants to add also, get the pin number provided
 * 3. verify the pin number, wrong pin number ==> failed to add for right pin number, allow to add the number to the account balance  
 * 4. get the current balance 
 * 5. add money to be added with the 
 * 6. display/update the balance is the DOM/UI
 */


document.getElementById('btn-add-money').addEventListener('click', function(even){
    even.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;
    // console.log(addMoney, pinNumber)

    if(pinNumber === '1234'){
        // console.log('added money to your account')
        //add money to the account
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)
        const balanceNumber = parseFloat(balance)

        //new balance
        const newBalance = balanceNumber + addMoneyNumber;

        //update the DOM with updated balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Fail to add money, please try again later')
    }
})