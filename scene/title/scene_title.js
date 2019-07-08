class SceneTitle extends WoodScene {
    constructor(game) {
        super(game)
        let label = WoodLabel.new(game, 'hello from wood')
        this.addElement(label)

        // cave bg
        let cave = WoodImage.new(game, 'cave')
        this.addElement(cave)
        // player
        let w = WoodAnimation.new(game)
        log('w---------->', w)
        w.x = -120
        w.y = 100
        this.w = w
        this.addElement(w)

        this.setupInputs()
    }
    setupInputs() {
        // 用 self 接一下 this
        let self = this
        this.game.registerAction('a', function (keyStatus) {
            self.w.move(-2, keyStatus)
        })
        this.game.registerAction('d', function (keyStatus) {
            self.w.move(+2, keyStatus)
        })
    }
}
