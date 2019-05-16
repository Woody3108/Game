const Ball = function() {
    // ball 8 * 8
    let image = imageFromPath('ball.png')
    let o = {
        image: image,
        x: 100,
        y: 100,
        // 末尾记得加 逗号 （一致性：1-35）
        speedX: 5,
        speedY: 5,
        fired: false,
    }
    o.fire = function () {
        o.fired = true
        log('ball fire')
    }
    o.move = function () {
        if (o.fired) {
            // log('ball move')
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            // ball move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.fantan = function () {
        o.speedY *= -1
    }
    return o
}
