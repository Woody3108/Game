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
            idle: [],
        }
        for (let i = 1; i < 4; i++) {
            let name = `b${i}`
            log('name---->', name)
            let t = game.textureByName(name)
            this.animations['idle'].push(t)
        }
        this.animationNanme = 'idle'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.frameIndex = 0
        this.frameCount = 3
        //
        this.flipX = false
        this.rotation = 0
        this.alpha = 1

        // 重力 和 加速度
        this.gy = 10
        this.vy = 0
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationNanme]
    }
    jump() {
        this.vy = -10
        this.rotation = -45
    }
    update() {
        // 更新 alpha
        if (this.alpha > 0)  {
            this.alpha -= 0.05
        }
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.2
        let h = 460
        if (this.y > h) {
            this.y = h
        }
        // 更新角度
        if (this.rotation < 45) {
            this.rotation += 5
        }
        // log('anim update', this.frameCount)
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        let context = this.game.context

        context.save()

        let w2 = this.w / 2
        let h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.globalAlpha = this.alpha
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)

        context.restore()

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
        // log('keyStatus', keyStatus)
        // // 表驱动法 ： 多个 if else
        // let animationNames = {
        //     down : 'run',
        //     up: 'slide',
        // }
        // let name = animationNames[keyStatus]
        // this.changeAnimation(name)
        // if (keyStatus == 'down') {
        //     this.changeAnimation('run')
        // } else if (keyStatus == 'up') {
        //     this.changeAnimation('slide')
        // }
    }
    // changeAnimation(name) {
    //     this.animationNanme = name
    // }
}

