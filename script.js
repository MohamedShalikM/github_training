const button = document.getElementById('btn');
const p = document.getElementById('p');
button.addEventListener('click',()=>{
    if (p.textContent == ''){
        p.textContent = 'button is clicked!' 
    }else{
        p.textContent = ''
    } 
})