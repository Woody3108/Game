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
        // alert('一定要继承本函数draw')
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            this.game.drawImage(e)
        }
    }
    update() {
        // if (this.debugModeEnabled) {
        //     for (let i = 0; i < this.elements.length; i++) {
        //         let e = this.elements[i]
        //         // 如果有 debug 属性，就调用 debug 函数
        //         e.debug && e.debug()
        //     }
        // }
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
