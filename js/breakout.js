const grid = document.querySelector('.breakoutGrid')
const blockWidth = 100
const blockHeight = 20
const userStart = [230, 10]
let userCurrentPosition = userStart
const ballStart = [270,40]
let ballCurrentPosition = ballStart
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight + [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
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

function addBlocks() {
    for (let index = 0; index < blocks.length; index++) {
        const block = document.createElement('div')
        block.classList.add('breakoutBlock')
        block.style.left = blocks[index].bottomLeft[0] + 'px'
        block.style.bottom = blocks[index].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }
}
addBlocks()

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
            if(userCurrentPosition[0]> 0){
            userCurrentPosition[0] -= 10
            drawUser()
            }
            break;
        case 'ArrowRight':
            if(userCurrentPosition[0]< 500)
            userCurrentPosition[0] += 10
            drawUser()
            break;
    }
}
// function moveBall(){
    
// }
document.addEventListener('keydown',moveUser)
const user = document.createElement('div')
user.classList.add('breakoutUser')
user.style.left = userCurrentPosition[0] + 'px'
user.style.bottom = userCurrentPosition[1] + 'px'
grid.appendChild(user)

const ball = document.createElement('div')
ball.classList.add('breakoutBall')
drawBall()
grid.appendChild(ball)

