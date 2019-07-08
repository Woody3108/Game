class WoodLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }
    static new(game, text) {
        let i = new this(game, text)
        return i
    }
    draw() {
        // draw labels
        this.game.context.fillText(this.text, 100, 100)
    }
    update() {

    }
}
