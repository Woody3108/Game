// 走路动画（单动画）
// class WoodAnimation {
//     constructor(game) {
//         this.game = game
//         // 为了省事，在这里 hard code 一套动画
//         this.frames = []
//         for (let i = 1; i < 10; i++) {
//             let name = `w${i}`
//             let t = game.textureByName(name)
//             this.frames.push(t)
//         }
//         this.texture = this.frames[0]
//         this.frameIndex = 0
//         this.frameCount = 3
//     }
//     static new(game) {
//         return new this(game)
//     }
//     update() {
//         log('anim update', this.frameCount)
//         this.frameCount--
//         if (this.frameCount == 0) {
//             this.frameCount = 3
//             this.frameIndex = (this.frameIndex + 1) % this.frames.length
//             this.texture = this.frames[this.frameIndex]
//         }
//     }
//     draw() {
//         this.game.drawImage(this)
//     }
//     move(x) {
//         this.x += x
//     }
// }

class WoodAnimation {
    constructor(game) {
        this.game = game
        // 为了省事，在这里 hard code 一套动画
        this.animations = {
            slide: [],
            run: [],
        }
        for (let i = 1; i < 9; i++) {
            let name = `slide${i}`
            log('name', name)
            let t = game.textureByName(name)
            this.animations['slide'].push(t)
        }
        for (let i = 1; i < 9; i++) {
            let name = `run${i}`
            let t = game.textureByName(name)
            this.animations['run'].push(t)
        }
        this.animationNanme = 'slide'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.frameIndex = 0
        this.frameCount = 3
        //
        this.flipX = false
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationNanme]
    }
    update() {
        log('anim update', this.frameCount)
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        let context = this.game.context
        if (this.flipX) {
            context.save()

            let x = this.x + this.w / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)

            context.drawImage(this.texture, this.x, this.y)

            context.restore()
        } else {
            context.drawImage(this.texture, this.x, this.y)
        }
    }
    move(x, keyStatus) {
        this.flipX = x < 0
        // 要写成上面的形式，不要写成下面的形式（垃圾代码）
        // if (x < 0) {
        //     this.flipX = true
        // } else {
        //     this.flipX = false
        // }

        this.x += x
        log('keyStatus', keyStatus)
        // 表驱动法 ： 多个 if else
        let animationNames = {
            down : 'run',
            up: 'slide',
        }
        let name = animationNames[keyStatus]
        this.changeAnimation(name)
        // if (keyStatus == 'down') {
        //     this.changeAnimation('run')
        // } else if (keyStatus == 'up') {
        //     this.changeAnimation('slide')
        // }
    }
    changeAnimation(name) {
        this.animationNanme = name
    }
}

