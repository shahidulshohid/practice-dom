console.log('first file')
const allLi = document.getElementsByTagName('li');
console.log(allLi)

const allTitles = document.getElementsByClassName('section-title')
console.log(allTitles)

const secondSection = document.getElementById('second-section');
console.log(secondSection)

secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';

const secondList = document.getElementById('second-list')
console.log(secondList)
const li = document.createElement('li');
li.innerText = 'My dynamic item';
secondList.appendChild(li)

