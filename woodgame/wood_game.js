class WoodGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        // events
        let self = this
        window.addEventListener('keydown',  (event) => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = false
        })
        this.init()
    }
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    // draw
    drawImage(img) {
        // img 是一个 WoodImage
        this.context.drawImage(img.texture, img.x, img.y)
    }
    // update
    update() {
        this.scene.update()
    }
    // draw
    draw() {
        this.scene.draw()
    }
    // registerAction注册事件
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        // log('window.fps----', window.fps)
        // events
        let g = this
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
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
        // draw
        g.draw()
        // next run loop
        setTimeout(function () {
            g.runloop()
        }, 1000/window.fps)
    }
    init() {
        let g = this
        let loads = []
        // 预先载入所有图片
        let names = Object.keys(g.images)
        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = g.images[name]
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
    }
    textureByName(name) {
        let g = this
        log('image by name', g.images)
        let img = g.images[name]
        // let image = {
        //     w: img.width,
        //     h: img.height,
        //     image: img,
        // }
        // return image
        return img
    }
    runWithScene(scene) {
        let g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function(){
            g.runloop()
        }, 1000/fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    _start(scene) {
        this.runCallback(this)
    }
}
