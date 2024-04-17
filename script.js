const buttons = document.querySelectorAll("button")
const humanChoice = document.querySelector(".humanChoice")
const aiChoice = document.querySelector(".aiChoice")
const result = document.querySelector(".result")
const myCounterArea = document.querySelector(".myCounter")
const aiCounterArea = document.querySelector(".aiCounter")
const totalMe = document.querySelector(".totalMe")
const totalAi = document.querySelector(".totalAi")
const menu = document.querySelector(".menu")

// ----------------------------------------------------------------

let myCounter = 0;
let aiCounter = 0;



// -----------------------------------------------------------------


const randomAiChoice = () => {
    const choices = ['r', 'p', 's'];

    const randomChoice = choices[Math.floor(Math.random() * 3)];

    aiChoice.src = `images/${randomChoice}.png`

    return randomChoice;
}

// -----------------------------------------------------------------

const updateScreen = () => {
    setTimeout(() => {

        myCounter = 0;
        myCounterArea.textContent = myCounter;
        aiCounter = 0;
        aiCounterArea.textContent = aiCounter;

        result.textContent = ""
        aiChoice.src = `images/r.png`
        humanChoice.src = `images/r.png`

        buttons.forEach(x => x.style.display = "inline-block")
    }, 1500);
}

// -----------------------------------------------------------------

const checkTotal = () => {

    if (myCounter == 3) {
        +totalMe.textContent++;
        myCounter = 0;
        myCounterArea.textContent = myCounter;
        aiCounter = 0;
        aiCounterArea.textContent = aiCounter;
        result.textContent = "YOU WIN"
        result.style.color = "green"
        buttons.forEach(x => x.style.display = "none")
        updateScreen();

    }

    else if (aiCounter == 3) {
        +totalAi.textContent++;
        myCounter = 0;
        myCounterArea.textContent = myCounter;
        aiCounter = 0;
        aiCounterArea.textContent = aiCounter;
        result.textContent = "YOU LOSE"
        result.style.color = "red"
        buttons.forEach(x => x.style.display = "none")
        updateScreen();
    }



}

// -----------------------------------------------------------------

const checkWinner = (me, ai) => {
    if (me != ai) {
        (['rs', 'pr', 'sp'].some(x => x == me + ai)) ? myCounter++ : aiCounter++;
    }
    myCounterArea.textContent = myCounter;
    aiCounterArea.textContent = aiCounter;
}

// -----------------------------------------------------------------

buttons.forEach(x => {
    x.addEventListener("click", () => {
        humanChoice.src = `images/${x.textContent.toLowerCase()}.png`


        checkWinner(x.textContent.toLowerCase(), randomAiChoice());
        checkTotal();

    })
})


// -----------------------------------------------------------------



menu.children[0].addEventListener("click", e => {
    menu.style.display = "none"

})

menu.children[1].addEventListener("click", e => {
    window.close();

})


