const grid = document.querySelector('.breakoutGrid')
const scoreDisplay = document.querySelector('#breakoutScoreDisplay')
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
const blockWidth = 100
const blockHeight = 20
const boardWidth = 600
const boardHeight = 300
const ballDiameter = 20
var xDirection = 2
var yDirection = 2
let score =0
const userStart = [230, 10]
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]
addBlocks()
const ballStart = [270, 40]
let userCurrentPosition = userStart
let ballCurrentPosition = ballStart
document.addEventListener('keydown', moveUser)
const user = document.createElement('div')
user.classList.add('breakoutUser')
user.style.left = userCurrentPosition[0] + 'px'
user.style.bottom = userCurrentPosition[1] + 'px'
grid.appendChild(user)
const ball = document.createElement('div')
ball.classList.add('breakoutBall')
grid.appendChild(ball)
moveBall()
let timerID;




function addBlocks() {
    for (let index = 0; index < blocks.length; index++) {
        const block = document.createElement('div')
        block.classList.add('breakoutBlock')
        block.style.left = blocks[index].bottomLeft[0] + 'px'
        block.style.bottom = blocks[index].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }
}
function drawUser() {
    user.style.left = userCurrentPosition[0] + 'px'
    user.style.bottom = userCurrentPosition[1] + 'px'
}
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}

function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (userCurrentPosition[0] > 0) {
                userCurrentPosition[0] -= 10
                drawUser()
            }
            break;
        case 'ArrowRight':
            if (userCurrentPosition[0] < 500)
                userCurrentPosition[0] += 10
            drawUser()
            break;
    }
}
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}
timerID = setInterval(moveBall, 20);

function checkForCollisions() {
    for (let i = 0; i < blocks.length; i++) {
        if (
            ( ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) 
            && ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1]&& ballCurrentPosition[1] < blocks[i].topLeft[1])
        ) {
            
            const allBlocks = Array.from(document.querySelectorAll('.breakoutBlock'))
            console.log(allBlocks[i], blocks[i])
            allBlocks[i].classList.remove('breakoutBlock')
            console.log(allBlocks[i], blocks[i])
            blocks.splice(i, 1)
            changeDirection()
            score++
            scoreDisplay.innerHTML = score
            if (blocks.length === 0) {
                scoreDisplay.innerHTML = score
                clearInterval(timerID)
                document.removeEventListener('keydown', moveUser)
            }
        }
    }
    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) ||
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0) {
        changeDirection()
    }
    if ((ballCurrentPosition[0] > userCurrentPosition[0]
        && ballCurrentPosition[0] < userCurrentPosition[0] + blockWidth)
        && (ballCurrentPosition[1] > userCurrentPosition[1]
            && ballCurrentPosition[1] < userCurrentPosition[1] + blockHeight)
    ) {
        changeDirection()
    }
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerID)
        scoreDisplay.innerHTML = 'You lose'
        document.removeEventListener('keydown', moveUser)
    }
}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
}


