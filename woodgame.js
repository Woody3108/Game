const Woodgame = function(fps) {
    let g = {
        actions: {},
        keydowns: {},
    }

    let canvas = document.querySelector('#id-canvas')
    let context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    // draw
    g.drawImage = function(woodImage) {
        g.context.drawImage(woodImage.image, woodImage.x, woodImage.y)
    }

    // events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })
    // registerAction注册事件
    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }
    // timer
    window.fps = 30
    const runloop = function(fps) {
        // events
        let actions = Object.keys(g.actions)
        for (let i = 0; i < actions.length; i++) {
            let key = actions[i]
            if (g.keydowns[key]) {
                // 如果按键被按下，调用注册的 action
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);
        // draw
        g.draw()
        // next run loop
        setTimeout(function () {
            runloop()
        }, 1000/window.fps)
    }
    setTimeout(function() {
        runloop()
    }, 1000/fps)
    return g
}
