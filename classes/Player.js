class Player {
  constructor(game) {
    this.game = game;
    this.collissionX = this.game.width * 0.5;
    this.collissionY = this.game.height * 0.5;
    this.collissionRadius = 30
    this.speedX = 0
    this.speedY = 0
  }
  draw(context){
    context.beginPath();
    context.arc(this.collissionX, this.collissionY, this.collissionRadius, 0, Math.PI * 2)
    context.save()
    context.globalAlpha = 0.5
    context.fill()
    context.restore()
    context.stroke()
    context.beginPath()
    context.moveTo(this.collissionX, this.collissionY)
    context.lineTo(this.game.mouse.x, this.game.mouse.y)
    context.stroke()
  }
  update(){
    this.speedX = this.game.mouse.x - this.collissionX;
    this.speedY = this.game.mouse.y - this.collissionY;
    this.collissionX += this.speedX
    this.collissionY += this.speedY
  }
}

export default Player;
