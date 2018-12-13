let grid = document.querySelector('.test');
grid.setAttribute('style','display: inline-grid;grid-template-columns: repeat(16,1fr);margin: 0 auto;width: 600px;height:600px;');
for (i=0;i<(16*16);i++){
    let div = document.createElement('div');
    div.classList.add('content');
    div.setAttribute('style','border: 1px solid;')
    div.textContent = 'text';
    grid.appendChild(div);
}

let div = document.querySelectorAll('.content');
div.forEach((square) => {
    square.addEventListener('mouseover',(e)=>{
        square.style.background = 'blue';
    });
});

let button = document.querySelector('button');
button.addEventListener('click',(e)=>{
    div.forEach((square) => {
        if(square.style.backgroundColor == 'blue'){
            square.style.background = 'white';
        }        //console.log(getComputedStyle(square,'background-color'));
    })
})
