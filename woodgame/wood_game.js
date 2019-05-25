const Wood_game = function(fps, images, runCallback) {
    // loads 是一个对象，里面是图片的引用名字和图片路径
    // 程序会在所有图片载入成功后才运行
    // log('woodgame',images)
    let g = {
        scene: null,
        actions: {},
        keydowns: {},
        images: {},
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
    // update
    g.update = function() {
        g.scene.update()
    }
    // draw
    g.draw = function() {
        g.scene.draw()
    }
    // registerAction注册事件
    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }
    // timer
    window.fps = 30
    var runloop = function() {
        // log('window.fps----', window.fps)
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

    let loads = []
    // 预先载入所有图片
    let names = Object.keys(images)
    for (var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function () {
            // 存入 g.images 中
            g.images[name] = img
            // 所有图片都载入成功之后，调用 run
            loads.push(1)
            log('load images')
            log('load images', loads.length, names.length)
            if (loads.length === names.length) {
                log('load images---', g.images)
                g._start()
            }
        }
    }
    g.imageByName = function(name) {
        log('image by name', g.images)
        let img = g.images[name]
        let image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    g.runWithScene = function(scene) {
        g.scene = scene
        // 开始运行程序
        setTimeout(function(){
            runloop()
        }, 1000/fps)
    }
    g.replaceScene = function(scene) {
        g.scene = scene
    }
    g._start = function(scene) {
        runCallback(g)
    }

    return g
}
