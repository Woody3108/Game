class WoodScene {
    constructor(game) {
        this.game = game
        // this.debugModeEnabled = true
        this.elements = []
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    draw() {
        for (let e of this.elements) {
            e.draw()
        }
    }
    update() {
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
    }
}

// 老的语法
// let WoodSence = function () {
//     this.a = 1
// }
//
// WoodSence.prototype.draw = function () {
//
// }
