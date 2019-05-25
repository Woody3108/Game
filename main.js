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
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle:'img/paddle.png',
    }

    let game = Wood_game(30, images, function (g) {
        // let s = Scene(g)
        let s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
