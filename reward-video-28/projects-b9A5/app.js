const selectedSeatEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");
const availableSeatEl = document.getElementById("Available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponField = document.getElementById("coupon-filed");
const couponBtn = document.getElementById("coupon-btn");
const defaultText = document.getElementById("default-text");
const grandTotalEl = document.getElementById("grand-total");
const phoneNumberEl = document.getElementById('phone-number')
const nexButtonEl = document.getElementById('next-btn')

let selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event) {
  const value = event.innerText;
  if (selectedSeat.includes(value)) {
    alert("seat already booked");
    return;
  } else if (selectedSeat.length < 4) {
    event.classList.add("bg-primary");
    event.classList.add("text-white");

    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

    //decrease available seat
    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;

    // remove default text
    defaultText.classList.add("hidden");

    selectedSeatEl.innerHTML += `
       <li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
       </li>
    `;
    //update total price
    //have to understand from support session=====================================================
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // active coupon button
    if (selectedSeat.length > 3) {
      couponField.removeAttribute("disabled");
      couponBtn.removeAttribute("disabled");
    }
  } else {
    return alert("Maximum seat booked");
  }
}

document.getElementById("coupon-btn").addEventListener("click", function () {
  const couponInputValue = couponField.value;
  console.log(couponInputValue)
  let couponSave = 0;

  if (couponInputValue !== "NEW50" && couponInputValue !== "couple 20") {
    alert("Your provided coupon is not valid");
    return;
  } else if (couponInputValue === "NEW50") {
    couponSave = totalPrice * .15;
  } else if (couponInputValue === "couple 20") {
    couponSave = totalPrice * .20;
  }
  
  const showCouponPrice = document.getElementById('show-coupon-price')
  showCouponPrice.innerHTML = `
  <p>Discount</p>
  <p>
  <span>-BDT:</span>
  <span>${couponSave.toFixed(2)}</span>
  </p>
  `;

  const grandTotalValue = totalPrice - couponSave;
  grandTotalEl.innerText = grandTotalValue.toFixed(2)
});
// have to understand here from support session =====================================
phoneNumberEl.addEventListener('input', function(e){
  const inputValue = e.target.value;
  // console.log(inputValue)
  if(inputValue.length >= 11){
    nexButtonEl.removeAttribute('disabled')
  }
})

document.getElementById('btn-continue').addEventListener('click', function(){
  window.location.reload()//this is for reload full page 
})