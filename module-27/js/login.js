
//search: form submit reloading th page
//step - 1 : set event handler
document.getElementById('button-login').addEventListener('click', function(even){

    //step - 2 : prevent default behavior (prevent reloading browser)
    even.preventDefault();

    //step - 3 : get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    
    
})
