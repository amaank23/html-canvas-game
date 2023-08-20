class Player {
  constructor(game) {
    this.game = game;
    this.collissionX = this.game.width * 0.5;
    this.collissionY = this.game.height * 0.5;
    this.collissionRadius = 30
    this.speedX = 0
    this.speedY = 0
    this.dx = 0;
    this.dy = 0;
    this.speedModifier = 5;
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
    this.dx = this.game.mouse.x - this.collissionX
    this.dy = this.game.mouse.y - this.collissionY
    const distance = Math.hypot(this.dy, this.dx)
    if(distance > this.speedModifier){
      this.speedX = this.dx / distance || 0;
      this.speedY = this.dy / distance || 0;

    } else {
      this.speedX = 0
      this.speedY = 0
    }
    this.collissionX += this.speedX * 5
    this.collissionY += this.speedY * 5

    this.game.obstacles.forEach(obstacle => {
      const [collision, distance, sumOfRadii, dx, dy] = this.game.checkCollision(this, obstacle)
      if(collision){
        const unit_x = dx / distance
        const unit_y = dy / distance
        this.collissionX = obstacle.collissionX + (sumOfRadii + 1) * unit_x
        this.collissionY = obstacle.collissionY + (sumOfRadii + 1) * unit_y
      }
    })
  }
}

export default Player;
