

document.getElementById("btn-add-money").addEventListener("click", function (even) {

    even.preventDefault();

    // const addMoney = getInputFieldValueById();
    // console.log(addMoney);
    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = parseFloat(addMoney);

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log(addMoney, pinNumber)


  });
