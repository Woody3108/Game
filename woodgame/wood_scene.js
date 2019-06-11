class WoodScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    addElement(img) {
        this.elements.push(img)
    }
    draw() {
        // alert('一定要继承本函数draw')
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            this.game.drawImage(e)
        }
    }
    update() {

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
