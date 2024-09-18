
// //nexElementSibling and previousElementSibling
// //=======================================
// // const item2 = document.getElementById('item2')
// // console.log(item2.parentElement.children)
// // console.log(item2.nextElementSibling)
// // console.log(item2.previousElementSibling  )


// //nextSibling and previousSibling
// //=======================================
// // console.log(item2.nextSibling)
// // console.log(item2.previousSibling)

// //setAttribute() getAttribute() and removeAttribute()
// //=====================================================
// // //setAttribute
// // const myBtn = document.getElementById('myButton')
// // myBtn.setAttribute('class', 'btn btn-primary')
// // myBtn.setAttribute('disabled', true)
// // myBtn.removeAttribute('disabled')
// // console.log(myBtn)


// // // getAttribute
// // const myLink = document.getElementById('myLink')
// // const link = myLink.getAttribute('title')
// // console.log(link)


// // creating an element and appen || add class name || classList [add(), remove()] || append child vs append
// // || remove() or remove child()
// const container5 = document.querySelector('.container5');

// const p = document.createElement('p');
// p.innerText = 'i am created by js dynamically';
// container5.appendChild(p)

// const h1 = document.createElement('h1');
// h1.textContent = 'i am h1  , and i can inject to html through js'
// // h1.className = 'common-class'
// h1.classList.add('common-class')
// h1.classList.remove('common-class')
// // container5.appendChild(h1)
// container5.append('h1', 'shahidul islam shohid')


// //remove and removeChild
// // container5.remove()
// container5.removeChild(p)



document.getElementById("container").innerHTML = "<p>Hello</p>"; document.getElementById("container").innerHTML += "<p>World</p>";