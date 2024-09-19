
/**
 * add money to the account
 * s-1: add event handler prevent page reload after form submit
 * s-2: get money to be added to the account balance
 * get the pin number
 * s-3: verify the pin number
 */
// step - 1 : add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(even){

    //prevent page reload after form submit
    even.preventDefault();

    // step - 2 : get money to be added to the account balance 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    //get the pin number provided
    const inputPInNumber = document.getElementById('input-pin-number').value;
    console.log(inputPInNumber)

    //step 3 : verify pin number
    //wrong way to validate pin number
    if(inputPInNumber === '1234'){
        console.log('added money to your account')

        //step 4 : get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        // step 5 : add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        // step 6 : update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    } 
    else {
        alert('fail to add money, please try again later')
    }
    
})
