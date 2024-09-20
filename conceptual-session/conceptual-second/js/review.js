document.getElementById('submit-btn').addEventListener('click', function(){
    const inputValue = document.getElementById('text-area').value;

    const container = document.getElementById('review');
    const p = document.createElement('p');
    p.innerText = inputValue;
    container.appendChild(p)
    
    document.getElementById('text-area').value = ''
    
    
})

// keyboard event 
document.getElementById('text-area').addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        const inputValue = document.getElementById('text-area').value;
        const p = document.createElement('p');
        p.innerText = inputValue;
        const container = document.getElementById('review');
        container.appendChild(p);
        document.getElementById('text-area').value = '';
        
    }
})