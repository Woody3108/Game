let Scene = function (game) {
    let s = {
        game: game,
    }
    // 初始化
    let paddle = Paddle(game)
    let ball = Ball(game)

    let score = 0

    let blocks = loadLevel(game, 1)

    game.registerAction('a', function() {
        paddle.moveLeft()
    })
    game.registerAction('d', function() {
        paddle.moveRight()
    })
    game.registerAction('f', function() {
        ball.fire()
    })

    s.draw = function () {
        // draw 背景
        game.context.fillstyle = '#6e6e6e'
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
    s.update = function () {
        if (window.pasued) {
            return
        }
        ball.move()
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转到 游戏结束 的场景
            let end = SceneEnd(game)
            game.replaceScene(end)
        }
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
    return s
}