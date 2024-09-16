console.log("this is separate js file");

//option 1: directly set on the html element;
{/* <button onclick="document.body.style.backgroundColor = 'yellow'">Make yellow</button> */}

//option 2: add onclick function
{/* <button onclick="makeRed()">Make red</button> */}
// <!-- important: we will use sometimes -->
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3: add onclick function
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//option 3: another
const makePurple = document.getElementById("make-purple");
makePurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green'
})

// option 4 final 
// important: we will use this sometimes
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenRod'
})
