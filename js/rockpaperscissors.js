function rockPaperScissors(){
    return `
    <div class="card" style="background: linear-gradient(30deg, rgb(184,171,191), rgb(226,223,228));">
    <div class="card-header text-center">
        <h2>
            Ordinateur
        </h2>
    </div>
    <div class="card-body text-center">
        <span class="text-center" id="computer-choice"> </span>
        <span class="text-center" id="result"> </span>
        <span class="text-center" id="your-choice"> </span>
    </div>
    <div class="card-footer text-center">
        <h2>Votre choix</h2>
        <div class="row">
            <div onClick="rockPaperScissorsGame('rock')" class="col-4 buttonRPC" id="rock">
                <div class="items">
                    <div class="icon-wrapper">
                        <i class="fa-solid fa-hand-back-fist fa-xl"></i>
                    </div>
                    <div class="project-name">
                        <p>Pierre</p>
                    </div>

                </div>
            </div>
            <div onClick="rockPaperScissorsGame('paper')" class="col-4 buttonRPC" id="paper">
                <div class="items">
                    <div class="icon-wrapper">
                        <i class="fa-solid fa-hand fa-xl"></i>
                    </div>
                    <div class="project-name">
                        <p>Feuille</p>
                    </div>
                </div>
            </div>
            <div onClick="rockPaperScissorsGame('scissors')" class="col-4 buttonRPC" id="scissors">
                <div class="items">
                    <div class="icon-wrapper">
                        <i class="fa-solid fa-hand-scissors fa-xl"></i>
                    </div>
                    <div class="project-name">
                        <p>Ciseaux</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}
function rockPaperScissorsGame(target) {
    const computerChoiceDisplay = document.getElementById('computer-choice')
    const userChoiceDisplay = document.getElementById('your-choice')
    const resultDisplay = document.getElementById('result')
    let userChoice;
    let computerChoice;
    userChoice = target
    console.log(target)
    console.log(userChoice)
    console.log(userChoiceDisplay)
    userChoiceDisplay.innerHTML = generateIconChoice(userChoice)
    computerChoice = generateComputerChoice()
    computerChoiceDisplay.innerHTML = generateIconChoice(computerChoice)
    result = getResult(computerChoice,userChoice)
    resultDisplay.innerHTML = result
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0)
        return 'rock'
    if (randomNumber === 1)
        return 'paper'
    if (randomNumber === 2)
        return 'scissors'
}
function generateIconChoice(choice) {
    if (choice === 'rock')
        return '<i class="fa-solid fa-hand-back-fist fa-2xl"></i>'
    if (choice === 'paper')
        return '<i class="fa-solid fa-hand fa-2xl"></i>'
    else {
        return '<i class="fa-solid fa-hand-scissors fa-2xl"></i>'
    }
}
function printResult(myResult){
    return `
    <div class = "bannerContainer">
        <div class="banner">
            `+myResult+`
            <div class="banner-left"></div>
            <div class="banner-right"></div>
        </div>
    </div>
    `
}
function getResult(computerChoice,userChoice) {
    if (computerChoice === userChoice) {
        return printResult(" It's a draw")
    }
    else if (computerChoice === 'rock') {
        if (userChoice === 'paper') {
            return printResult("You WIN")
        }
        else {
            return printResult("You LOST")
        }
    }
    else if (computerChoice === 'paper') {
        if (userChoice === 'scissors') {
            return printResult("You WIN")
        }
        return printResult("You LOST")
    }
    else if (computerChoice === 'scissors') {
        if (userChoice === 'rock') {
            return printResult("You WIN")
        }
        return printResult("You LOST")
    }
}