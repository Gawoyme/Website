const canvas = document.querySelector('#fighting_game')
const c = canvas.getContext('2d')
const gravity = 0.2
canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastKey

    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }
        else this.velocity.y += gravity
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
        }
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
        }
    }
)
const keys = {
    d: {
        pressed: false
    },
    q: {
        pressed: false
    },
    s: {
        pressed: false
    },
    z: {
        pressed: false
    }
}
let lastKey
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    if (keys.q.pressed && lastKey === 'q') {
        player.velocity.x = -1
    } else if (keys.d.pressed && lastKey === 'd') {
        player.velocity.x = 1
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
            player.velocity.y = -10
            break
    }
    
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
            player.velocity.y = -10
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
        case 'z':
            keys.z.pressed = false
            break
    }
})