class Obstacle {
    constructor(game){
        this.game = game;
        this.collissionX = Math.random() * this.game.width;
        this.collissionY = Math.random() * this.game.height
        this.collissionRadius = 60;
        this.image = document.getElementById('obstacles')
        this.spriteWidth = 250
        this.spriteHeight = 250
        this.width = this.spriteWidth
        this.height = this.spriteHeight
        this.spriteX = this.collissionX - this.width * 0.5;
        this.spriteY = this.collissionY - this.height * 0.5 - 70;
        this.frameX = Math.floor(Math.random() * 4)
        this.frameY = Math.floor(Math.random() * 3)
    }
    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.spriteX, this.spriteY, this.width, this.height)
        context.beginPath();
        context.arc(this.collissionX, this.collissionY, this.collissionRadius, 0, Math.PI * 2)
        context.save()
        context.globalAlpha = 0.5
        context.fill()
        context.restore()
        context.stroke()
    }
}

export default Obstacle