import Obstacle from "./Obstacle";
import Player from "./Player";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.player = new Player(this)
        this.noOfObstacles = 5
        this.obstacles = [];
        this.mouse = {
            x: this.width * 0.5,
            y: this.height * 0.5,
            pressed: false
        }

        this.canvas.addEventListener("mousedown", (e) => {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
            this.mouse.pressed = true
        })
        this.canvas.addEventListener("mouseup", (e) => {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
            this.mouse.pressed = false
        })
        this.canvas.addEventListener("mousemove", (e) => {
            if(this.mouse.pressed){
                this.mouse.x = e.offsetX
                this.mouse.y = e.offsetY   
            }
        })
    }
    render(context){
        this.player.draw(context)
        this.player.update()
        this.obstacles.forEach(obstacle => obstacle.draw(context))
    }
    init(){
        let attempts = 0
        while(this.obstacles.length < this.noOfObstacles && attempts < 500){
            let testObstacle = new Obstacle(this)
            let overlap = false
            this.obstacles.forEach(obstacle => {
                const dx = testObstacle.collissionX - obstacle.collissionX
                const dy = testObstacle.collissionY - obstacle.collissionY
                const distance = Math.hypot(dy, dx)
                const sumOfRadii = testObstacle.collissionRadius + obstacle.collissionRadius

                if(distance < sumOfRadii){
                    overlap = true
                }
            })
            if(!overlap){
                this.obstacles.push(testObstacle)
            }
            attempts++
        }
        console.log(attempts);
    }
}
export default Game