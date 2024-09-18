
//nexElementSibling and previousElementSibling
//=======================================
// const item2 = document.getElementById('item2')
// console.log(item2.parentElement.children)
// console.log(item2.nextElementSibling)
// console.log(item2.previousElementSibling  )


//nextSibling and previousSibling
//=======================================
// console.log(item2.nextSibling)
// console.log(item2.previousSibling)

//setAttribute() getAttribute() and removeAttribute()
//=====================================================
//setAttribute
const myBtn = document.getElementById('myButton')
myBtn.setAttribute('class', 'btn btn-primary')
myBtn.setAttribute('disabled', true)
myBtn.removeAttribute('disabled')
console.log(myBtn)


// getAttribute
const myLink = document.getElementById('myLink')
const link = myLink.getAttribute('title')
console.log(link)
