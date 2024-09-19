
//search: form submit reloading th page
//step - 1 : set event handler
document.getElementById('button-login').addEventListener('click', function(even){

    //step - 2 : prevent default behavior (prevent reloading browser)
    even.preventDefault();

    //step - 3 : get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber)

    //step - 4 : validate phone and pin
    //this is temporary. you should not do like this
    if(phoneNumber === '5' && pinNumber === '1234'){

        // step - 5 : allow user to use the webpage 
        window.location.href = './home.html'
    }
    else {
        alert('Wrong phone number or pin number')
    }
    
})
