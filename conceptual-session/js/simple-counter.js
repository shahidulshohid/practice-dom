const count = document.getElementById("count");
const counter = document.getElementById("counter");
counter.addEventListener("click", function () {

  if (increaseBtn.getAttribute("disabled") === null) {
    increaseBtn.setAttribute("disabled", true);
    decreaseBtn.setAttribute("disabled", true);
    counter.classList.add("bg-red-500");
  }
  else{
    increaseBtn.removeAttribute('disabled');
    decreaseBtn.removeAttribute('disabled',);
    counter.classList.remove('bg-red-500')
  }
});

const increaseBtn = document.getElementsByClassName("increase-button")[0];
const decreaseBtn = document.getElementsByClassName("decrease-button")[0];
increaseBtn.addEventListener("click", function (even) {
  let currentCount = Number(count.innerText);
  currentCount++;
  count.innerText = currentCount;
  even.stopPropagation();
});

decreaseBtn.addEventListener("click", function (even) {
  let currentCount = Number(count.innerText);
  currentCount--;
  count.innerText = currentCount;
  even.stopPropagation();
});
