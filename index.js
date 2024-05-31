
const newgame = document.querySelector('.begin')
const layout = document.querySelector('.layout')


 const startGame = ()=>{
     layout.innerHTML = `
            <header>
                <h1>8 GRADER GUESSER</h1>
                <div class="record">
                    <div>
                        <h2>Welcome Champ!</h2>
                        <h3>Chance: <span class='chance emp'>3</span></h3>
                    </div>
                    <div class='score-board'>
                    <h3>Time left: <span class="timer emp">3</span></h3>
                    <h3>Score: <span class='score emp'>0</span></h3>
                    </div>
                </div>
            </header>
            <main>
                <p>Guess my Lucky number between 1 - 100</p>
                <div class="input">
                        <input type="number" placeholder="Enter a number" disabled="true" />   
                        <p class="feedback"></p>
                </div>
               
                <button type="button">Start</button>
            </main>
    `
    layout.classList.add('layout-main')
 }

document.addEventListener('DOMContentLoaded',()=>{
    console.log('loaded')
     newgame.addEventListener('click',()=>{
    startGame()
    loadGuess()
});

})


function loadGuess(){
   
const guessinput = document.querySelector('input')
const displayf = document.querySelector('.feedback')
const startbtn = document.querySelector('button')
const timer = document.querySelector('.timer')
const scoreDom = document.querySelector('.score')
const ChanceDom = document.querySelector('.chance')


function getRandomnum(){
     const Randomnum =  Math.floor(Math.random() * 100)
     console.log(Randomnum)
     return Randomnum
}

let Chance = 3
 let stoptime = 60
let number = getRandomnum()
 let Score = 0

 console.log(number)

 let decreasesec;
timer.textContent = stoptime
scoreDom.textContent = Score
ChanceDom.textContent = Chance

const countdown = ()=>{
    start = true
 decreasesec = setInterval(()=>{
        stoptime--
        timer.textContent = stoptime
    if(stoptime <= 30){
        timer.style.color = 'red'
    }
    if(stoptime<=0 || Chance === 0){
        clearInterval(decreasesec)
        start = false
        layout.classList.remove('layout-main')
        layout.innerHTML = `
    
            <p class='final-p'> Game Over. My Lucky number was <span class='guessnum success'>${number}</span></p>
            <p class='final-p'>Your Score is <span class=' ${Score<10? 'final-score danger':'final-score success'}'> ${Score}</span></p>
            <button class='try-again'>Try Again</button>
       
    `

        const tryagain = document.querySelector('.try-again')

        tryagain.addEventListener('click',()=>{
            startGame()
            loadGuess()
        })

    }
    },1000)
    guessinput.disabled = false
 
}

startbtn.addEventListener('click',()=>{
    clearInterval(decreasesec)
    countdown()
})
guessinput.addEventListener('change',(e)=>{
    const guessnum = +e.target.value;
   
    Chance--
    ChanceDom.textContent = Chance
   
    if(guessnum === number){
        displayf.textContent = 'guessed right'
        displayf.style.color = 'green'
        Score += 5
        scoreDom.textContent = Score
        Chance = 3
        ChanceDom.textContent = Chance
         number = getRandomnum()
        console.log(number)
         

    }else if(guessnum < number){
        displayf.textContent = "Try again, guess too low"
        displayf.style.color = 'yellow'
    }
    else if(guessnum > number){
        displayf.textContent = "Try again, guess too high"
        displayf.style.color = 'yellow'
    }
    else if(typeof(guessnum) == NaN || guessnum > 100 || guessnum < 1){
        displayf.textContent = 'Enter a valid number between 1 - 100'
        displayf.style.color = "red"
    }
    // else{
    //     displayf.textContent = 'Try again, you might be lucky!'
    //     displayf.style.color = 'yellow'
    // }

    e.target.value = ''
})
}



 






//  let stoptime = 5 
//    console.log(setInterval(()=>stoptime--,1000))
//     const end = stoptime - timenow
//      if(end === 0){
//         document.querySelector(body).innerHtml = "<p>Game Over</p>"
//     }

