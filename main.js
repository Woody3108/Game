const loadLevel = function(game, n) {
    n = n - 1
    let level = levels[n]
    let blocks = []
    for (let i = 0; i < level.length; i++) {
        let p = level[i]
        let b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

const enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        let k = event.key
        if (k === 'p') {
            // 暂停功能
            window.pasued = !window.pasued
        } else if ('1234567'.includes(k)) {
            // 临时载入关卡功能
            // blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    // document.querySelector('#id-input-speed').addEventListener('input', function () {
    //     let input = event.target
    //     log('控制速度', event)
    //     log(input.value)
    //     window.fps = Number(input.value)
    // })
}

const __main = function() {

    let images = {
        // ball: 'img/ball.png',
        // block: 'img/block.png',
        // paddle:'img/paddle.png',
        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/sky.png',
        enemy0: 'img/enemy.png',
        enemy1: 'img/enemy.png',
        enemy2: 'img/enemy.png',
        enemy3: 'img/enemy.png',
        enemy4: 'img/enemy.png',
        // 走路动画
        // w1: 'img/walking/w1.png',
        // w2: 'img/walking/w2.png',
        // w3: 'img/walking/w3.png',
        // w4: 'img/walking/w4.png',
        // w5: 'img/walking/w5.png',
        // w6: 'img/walking/w6.png',
        // w7: 'img/walking/w7.png',
        // w8: 'img/walking/w8.png',
        // w9: 'img/walking/w9.png',
        // w10: 'img/walking/Walk10.png',
        // w11: 'img/walking/Walk11.png',
        // w12: 'img/walking/Walk12.png',
        // w13: 'img/walking/Walk13.png',

        // 多状态动画
        // 跑动
        // run1: 'img/running/r1.png',
        // run2: 'img/running/r2.png',
        // run3: 'img/running/r3.png',
        // run4: 'img/running/r4.png',
        // run5: 'img/running/r5.png',
        // run6: 'img/running/r6.png',
        // run7: 'img/running/r7.png',
        // run8: 'img/running/r8.png',
        // run9: 'img/running/r9.png',
        // run10:'img/running/r10.png',
        // run11:'img/running/r11.png',

        // 滑倒
        // slide1: 'img/slide/s1.png',
        // slide2: 'img/slide/s2.png',
        // slide3: 'img/slide/s3.png',
        // slide4: 'img/slide/s4.png',
        // slide5: 'img/slide/s5.png',
        // slide6: 'img/slide/s6.png',
        // slide7: 'img/slide/s7.png',
        // slide8: 'img/slide/s8.png',
        // slide9: 'img/slide/s9.png',
        // slide10:'img/slide/s10.png',
        // slide11:'img/slide/s11.png',

        // 背景
        // cave: 'img/sky.png',

        // flappy bird images
        bg: 'img/background.png',
        ground: 'img/ground.jpg',
        b1: 'img/bird1.png',
        b2: 'img/bird2.png',
        b3: 'img/bird3.png',
    }

    let game = WoodGame.instance(30, images, function (g) {
        // let s = Scene.new(g)
        let s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
