

//add event listener for calculate button

let count = 0;
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function () {
  count += 1;
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  // calculation here
  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  // expenses history 
  const historyItem = document.createElement('div');
  historyItem.className = 'bg-white p-3 rounded-md border-2 border-indigo-500'
  historyItem.innerHTML = `
  <p class='text-xs text-gray-500'>Serial: ${count}</p>
  <p class='text-xs text-gray-500'>${new Date().toLocaleDateString()}</p>
  <p class='text-xs text-gray-500'>Income: ${income.toFixed(2)}
  <p class='text-xs text-gray-500'>totalExpenses: ${totalExpenses.toFixed(2)}
  <p class='text-xs text-gray-500'>balance: ${balance.toFixed(2)}
  `;

  const historyContainer = document.getElementById('history-list');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

//saving calculate here
const calculateSavingButton = document.getElementById("calculate-savings");
calculateSavingButton.addEventListener("click", function () {
  const savingPercentage = parseFloat(document.getElementById("savings").value);

  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const savingAmount = (savingPercentage * balance) / 100;

  const remainingBalance = balance - savingAmount;

  const savingElement = document.getElementById("savings-amount");
  savingElement.innerText = savingAmount.toFixed(2);

  const remainingBalanceEl = document.getElementById("remaining-balance");
  remainingBalanceEl.innerText = remainingBalance.toFixed(2);
});

// history functionality starts here
const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");

// historyTab button

historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  historyTab.classList.remove("text-gray-600");

  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  assistantTab.classList.add("text-gray-600");

  const expensesForm = document.getElementById("expense-form");
  expensesForm.classList.add("hidden");

  const historySection = document.getElementById('history-section');
  historySection.classList.remove('hidden')
});

// assistantTab button

assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  const expensesForm = document.getElementById("expense-form");
  expensesForm.classList.remove("hidden");

  const historySection = document.getElementById('history-section');
  historySection.classList.add('hidden')
});
