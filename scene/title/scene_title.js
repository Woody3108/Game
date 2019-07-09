class SceneTitle extends WoodScene {
    constructor(game) {
        super(game)
        // let label = WoodLabel.new(game, 'hello from wood')
        // this.addElement(label)

        //  bg
        let bg = WoodImage.new(game, 'bg')
        this.addElement(bg)
        // 循环移动地面
        this.grounds = []
        for (let i = 0; i < 30; i++) {
            let g = WoodImage.new(game, 'ground')
            g.x = i * 15
            g.y = 460
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 4
        // bird
        let b = WoodAnimation.new(game)
        b.x = 100
        b.y = 200
        this.bird = b
        this.addElement(b)

        this.setupInputs()
    }
    update() {
        super.update()
        // 地面移动
        this.skipCount--
        let offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for (let i = 0; i < 30; i++) {
            let g = this.grounds[i]
            g.x += offset
        }
    }
    setupInputs() {
        // 用 self 接一下 this
        let self = this
        let b = this.bird
        this.game.registerAction('a', function (keyStatus) {
            b.move(-2, keyStatus)
        })
        this.game.registerAction('d', function (keyStatus) {
            b.move(2, keyStatus)
        })
        this.game.registerAction('j', function (keyStatus) {
            b.jump()
        })
    }
}
