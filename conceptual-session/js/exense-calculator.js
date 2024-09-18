const insertButton = document.getElementById('expense-insert-btn');
const expenseField = document.getElementById('expense-field');
const amountField = document.getElementById('amount-field');

const rowContainer = document.getElementById('row-container')

const expenseSpan = document.getElementById('expense-amount')

insertButton.addEventListener('click', function(){
    const expense = expenseField.value;
    const amount = Number(amountField.value);

    //using js function
    const rowUsingJs = document.createElement('div');
    const expenseP = document.createElement('p');
    const amountP = document.createElement('p');

    expenseP.append(expense);
    amountP.append(amount);

    rowUsingJs.classList.add('flex', 'justify-between');
    rowUsingJs.setAttribute('data-amount', amount);

    rowUsingJs.append(expenseP);
    rowUsingJs.append(amountP)

    rowContainer.appendChild(rowUsingJs)
    //using js function end

    const row = `
       <div class="flex justify-between" data-amount = '${amount}'>
            <p>${expense}</p>
            <p>${amount}</p>
        </div>
    `;
    rowContainer.innerHTML += row;
    
    let expenseAmount = Number(expenseSpan.innerText);
    expenseAmount += amount;
    expenseSpan.innerText = expenseAmount;
})