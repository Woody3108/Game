class WoodScene {
    constructor(game) {
        this.game = game
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    draw() {
        alert('一定要继承本函数draw')
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
