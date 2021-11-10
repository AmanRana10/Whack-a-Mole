const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
const startbtn=document.querySelector('#startbtn')

let score = document.querySelector('#score')
let currtime = 60;
let result = 0;

startbtn.addEventListener('click',()=>{
    function randomsquare() {
        square.forEach(className => {
            className.classList.remove('mole')
        });
    
        let randomposition = square[Math.floor(Math.random() * 9)];
        randomposition.classList.add('mole');
    
        hitposition = randomposition.id;
    }
    
    square.forEach(id => {
        id.addEventListener('click', () => {
            if (id.id == hitposition) {
                result = result + 1;
                score.textContent = result;
            }
        })
    
    });
    
    function movemole() {
        let timerid = null;
        timerid = setInterval(randomsquare, 1000)
    }
    
    movemole();
    
    function countdown()
    {
        currtime--;
        timeleft.textContent = currtime;
    
        if(currtime == 0)
        {
            clearInterval(timerid);
            let c = confirm("Game Over!! Your score is "+ result);
            if(c==1)
            {
                window.location.reload(true);
            }
            else{
                window.location.reload(true);
            }
        }
    }
    let timerid = setInterval(countdown,1000);
})


