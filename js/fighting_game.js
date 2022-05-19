const canvas = document.querySelector('#fighting_game')
const c = canvas.getContext('2d')
const gravity = 0.7
canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor({ position, velocity, color, offset }) {
        this.position = position
        this.velocity = velocity
        this.color = color
        this.height = 150
        this.width = 50
        this.lastKey
        this.isAttacking
        this.health = 100
        this.attackBox = {
            position:
            {
                x: this.position.x,
                y: this.position.y
            },
            width: 100,
            height: 50,
            offset
        }

    }
    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        if (this.isAttacking) {
            c.fillStyle = 'green'
            c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }
        else this.velocity.y += gravity
    }
    attack() {
        this.isAttacking = true
        setTimeout(() => {
            this.Attacking = false
        }, 100)
    }
}

const player = new Sprite(
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
const enemy = new Sprite(
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
function rectangularCollision(rectangle1, rectangle2) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
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