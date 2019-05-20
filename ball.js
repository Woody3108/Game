const Ball = function(game) {
    // ball 8 * 8
    let o = game.imageByName('ball')

    o.x = 100
    o.y = 200
    // 末尾记得加 逗号 （一致性：1-35）
    o.speedX = 5
    o.speedY = 5
    o.fired = false

    o.fire = function () {
        o.fired = true
        log('ball fire')
    }
    o.move = function () {
        if (o.fired) {
            log('ball move')
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
