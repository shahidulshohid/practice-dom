document.getElementById('submit-btn').addEventListener('click', function(){
    const inputValue = document.getElementById('text-area').value;

    const container = document.getElementById('review');
    const p = document.createElement('p');
    p.innerText = inputValue;
    container.appendChild(p)
    
    document.getElementById('text-area').value = ''
    
    
})