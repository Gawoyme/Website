class Sprite {
    constructor({ position,imageSrc}) {
        this.position = position
        this.height = 150
        this.width = 50
        this.image = new Image()
        this.image.src = imageSrc

    }
    draw() {
        c.drawImage(this.image, this.position.x,this.position.y)
    }
    update() {
        this.draw()
    }
}

class Fighter {
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
        if (this.position.y + this.height + this.velocity.y >= canvas.height - 95) {
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