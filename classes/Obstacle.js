class Obstacle {
    constructor(game){
        this.game = game;
        this.collissionX = Math.random() * this.game.width;
        this.collissionY = Math.random() * this.game.height
        this.collissionRadius = 100;
    }
    draw(context){
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