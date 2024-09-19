
/**
 * add money to the account
 * 1: add event handler prevent page reload after form submit
 * 2: get money to be added to the account balance
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
    
})
