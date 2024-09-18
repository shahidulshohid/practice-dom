const ulTag = document.getElementById('navbar-container');
const ulTagItems = ulTag.getElementsByTagName('li');

let lastClicked = null;
for(const singleListItem of ulTagItems){
    singleListItem.addEventListener('click', function(){
        // console.log(lastClicked)
        if(lastClicked == null){
            singleListItem.style.backgroundColor = 'red';
            singleListItem.style.color = 'white';
            lastClicked = singleListItem;
        }
        else{
            lastClicked.style.backgroundColor = 'transparent';
            lastClicked.style.color = 'black';

            singleListItem.style.backgroundColor = 'red';
            singleListItem.style.color = 'white';
            lastClicked = singleListItem;
        }
    })
}
