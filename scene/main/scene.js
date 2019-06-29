const config = {
    player_speed: 10,
    cloud_speed: 1,
    enemy_speed: 5,
    bullet_speed: 5,
    fire_cooldown: 9,
}

class Bullet extends WoodImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        // 可以实现动态调整每一发子弹的速度
        this.speed = config.bullet_speed
        // this.speed = 2
    }
    update() {
        this.y -= this.speed
    }
}

class Player extends WoodImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.speed = 5
        this.cooldown = 0
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown --
        }
    }
    fire() {
        if (this.cooldown === 0) {
            this.cooldown = config.fire_cooldown
        }
        let x = this.x + this.w / 2
        let y = this.y
        let b = Bullet.new(this.game)
        b.x = x
        b.y = y
        this.scene.addElement(b)
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}

class Enemy extends WoodImage {
    constructor(game) {
        let type = randomBetween(0, 4)
        let name = 'enemy' + type
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, -50)
    }
    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
}

class Cloud extends WoodImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }
    setup() {
        this.speed = 1
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, -50)
    }
    update() {
        this.speed = config.cloud_speed
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
    // debug() {
    //     // this.speed = config.cloud_speed
    // }
}

class Scene extends WoodScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setUpInputs()
    }
    setup() {
        let game = this.game
        this.numberOfEnemies = 5
        this.bg = WoodImage.new(game, 'sky')
        // 暂时用一下bilibili的图片替代云
        this.cloud = Cloud.new(game, 'cloud')
        // this.player = WoodImage.new(game, 'player')
        // this.enemy = WoodImage.new(game, 'enemy')
        this.player = Player.new(game)
        this.player.x = 100
        this.player.y = 150

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        this.addEnemies()

        // add particles
        let ps = WoodParticleSystem.new(this.game)
        this.addElement(ps)

    }

    addEnemies() {
        let es = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }
    setUpInputs() {
        let g = this.game
        let s = this
        g.registerAction('a', function() {
            s.player.moveLeft()
        })
        g.registerAction('d', function() {
            s.player.moveRight()
        })
        g.registerAction('w', function() {
            s.player.moveUp()
        })
        g.registerAction('s', function() {
            s.player.moveDown()
        })
        g.registerAction('j', function() {
            s.player.fire()
        })
    }
    update() {
        super.update()
        this.cloud.y += 1
    }
}
