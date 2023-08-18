class Game {
    constructor(canvas, Player) {
        this.canvas = canvas;
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.player = new Player(this)
        this.mouse = {
            x: this.width * 0.5,
            y: this.height * 0.5,
            pressed: false
        }

        this.canvas.addEventListener("mousedown", (e) => {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
            this.mouse.x = true
        })
        this.canvas.addEventListener("mouseup", (e) => {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
            this.mouse.x = false
        })
        this.canvas.addEventListener("mousemove", (e) => {
            this.mouse.x = e.offsetX
            this.mouse.y = e.offsetY
        })
    }
    render(context){
        this.player.draw(context)
        this.player.update()
    }
}
export default Game