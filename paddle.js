const Paddle = function() {
    // paddle 64 * 16
    let image = imageFromPath('paddle.png')
    let o = {
        image: image,
        x: 150,
        y: 250,
        // 末尾记得加 逗号 （一致性：1-35）
        speed: 15,
    }
    let paddle = o
    o.move = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.move(paddle.x - paddle.speed)
    }
    o.moveRight = function() {
        o.move(paddle.x + paddle.speed)

    }
    o.collide = function(ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                log('相撞')
                return true
            }
        }
        return false
    }
    return o
}
