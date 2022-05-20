const canvas = document.querySelector('#fighting_game')
const c = canvas.getContext('2d')
const gravity = 0.7
canvas.width = 1024
canvas.height = 576
let timer = 10 
let timerId

const background = new Sprite({
    position:{
        x:0,
        y:0
    },
    imageSrc: 'assets/gameAssets/oak_woods_v1.0/background/background.PNG'
})
c.fillRect(0, 0, canvas.width, canvas.height)

decreaseTimer()


const player = new Fighter(
    {
        position:
        {
            x: 0,
            y: 0
        },
        velocity: {
            x: 0,
            y: 0,
        },
        offset: {
            x: 0,
            y: 0,
        },
        color: 'red'
    }
)
const enemy = new Fighter(
    {
        position:
        {
            x: 400,
            y: 300
        },
        velocity: {
            x: 0,
            y: 0,
        },
        offset: {
            x: -50,
            y: 0,
        },
        color: 'blue'
    }
)
const keys = {
    d: {
        pressed: false
    },
    q: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
}
let lastKey

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    player.update()
    enemy.update()
    // player movement
    player.velocity.x = 0
    if (keys.q.pressed && player.lastKey === 'q') {
        player.velocity.x = -5
    } else if (keys.d.pressed && player.lastKey === 'd') {
        player.velocity.x = 5
    }
    //enemy movement
    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 5
    }
    //detect hitbox collisions
    if (
        rectangularCollision(player, enemy)
        && player.isAttacking) {
        player.isAttacking = false
        enemy.health -= 5
        document.querySelector('#enemyHealthBar').style.width = enemy.health + '%'
    }
    if (
        rectangularCollision(enemy, player)
        && enemy.isAttacking) {
        enemy.isAttacking = false
        player.health -= 5
        document.querySelector('#playerHealthBar').style.width = player.health + '%'
    }

    //determine winner based on health
    if(player.health <= 0 || enemy.health <= 0){
        determineWinner(player,enemy,timerId)
    }
}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
    }
    switch (event.key) {
        case 'q':
            keys.q.pressed = true
            player.lastKey = 'q'
            break
    }
    switch (event.key) {
        case 'z':
            player.velocity.y = -20
            break
    }
    switch (event.key) {
        case ' ':
            player.attack()
            break
    }
    switch (event.key) {
        case 'ArrowDown':
            enemy.attack()
            break
    }

    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
    }
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'
            break
    }
    switch (event.key) {
        case 'ArrowUp':
            enemy.velocity.y = -20
            break
    }

})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
    }
    switch (event.key) {
        case 'q':
            keys.q.pressed = false
            break
    }
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
    }
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
    }
})