class WoodImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        log('this.texture', this.texture)
        this.w = this.texture.width
        this.h = this.texture.height
    }
    static new(game, name) {
        let i = new this(game, name)
        return i
    }
    draw() {
        alert('一定要继承本函数draw')
    }
    update() {

    }
}

// 逻辑上来看不应该继承 WoodImage ，但是暂时这么做
// class Player extends WoodImage{
//     constructor(game, name) {
//         super(game, name)
//     }
// }
