class WoodParticle extends WoodImage{
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {
        this.life = 20

    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        let factor = 0.01
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}


class WoodParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.duration = 50
        this.x = 150
        this.y = 200
        this.numberOfParticles = 100
        this.particles = []
    }
    update() {
        this.duration--
        // 添加小火花
        if (this.particles.length < this.numberOfParticles) {
            let p = WoodParticle.new(this.game)
            // 设置初始化坐标
            let s = 2
            let vx = 1 * randomBetween(-s, s)
            let vy = 1 * randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // 更新所有的小火花
        for (let p of this.particles) {
            p.update()
        }
        // 删除死掉的小火花
        this.particles = this.particles.filter(p => p.lifes > 0)
    }

    draw() {
        if (this.duration < 0) {
            // TODO , 这是一个临时方案
            //  应该从 sence 中删掉自己
            return
        }
        for (let p of this.particles) {
            p.draw()
        }
    }
}
