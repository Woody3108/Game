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
let blocks = []
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
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function () {
        let input = event.target
        log('控制速度', event)
        log(input.value)
        window.fps = Number(input.value)
    })
}

const __main = function() {

    let images = {
        ball: 'ball.png',
        block: 'block.png',
        paddle:'paddle.png',
    }

    let game = Woodgame(30, images, function (g) {
        let paddle = Paddle(game)
        let ball = Ball(game)

        let score = 0

        blocks = loadLevel(game, 1)

        let pasued = false

        game.registerAction('a', function() {
            paddle.moveLeft()
        })
        game.registerAction('d', function() {
            paddle.moveRight()
        })
        game.registerAction('f', function() {
            ball.fire()
        })

        game.update = function() {
            if (window.pasued) {
                return
            }
            ball.move()
            // 判断相撞
            if (paddle.collide(ball)) {
                // 调用一个 ball.反弹() 实现
                ball.fantan()
            }
            // 判断 ball 和 blocks 相撞
            for (let i = 0; i < blocks.length; i++) {
                let block = blocks[i]
                if (block.collide(ball)) {
                    log('球block相撞')
                    block.kill()
                    ball.fantan()
                    // 更新分数
                    score += 100
                }
            }
        }

        // mouse event
        let enableDrag = false
        game.canvas.addEventListener('mousedown', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            log(x, y)
            // 检查是否点中了 ball
            if (ball.hasPoint(x, y)) {
                // 设置拖拽
                enableDrag = true
            }
        })

        // mouse move
        game.canvas.addEventListener('mousemove', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            // log(x, y, 'move')
            if (enableDrag) {
                log(x, y, 'drag')
                ball.x = x
                ball.y = y
            }
        })

        // mouse up
        game.canvas.addEventListener('mouseup', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            log(x, y, 'up')
            enableDrag = false
        })

        game.draw = function() {
            // draw 背景
            game.context.fillstyle = '#554'
            game.context.fillRect(0, 0, 400, 300)
            // draw
            game.drawImage(paddle)
            game.drawImage(ball)
            // draw blocks
            for (let i = 0; i < blocks.length; i++) {
                let block = blocks[i]
                if (block.alive) {
                    game.drawImage(block)
                }
            }
            // draw labels
            game.context.fillText('分数：' + score, 10, 290)
        }
    })

    enableDebugMode(game, true)
}

__main()
