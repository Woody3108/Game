const Paddle = function(game) {
    // paddle 64 * 16
    let o = game.imageByName('paddle')
    // let o = {
    //     image: image,
    //     x: 150,
    //     y: 250,
    //     // 末尾记得加 逗号 （一致性：1-35）
    //     speed: 15,
    // }
    o.x = 100
    o.y = 250
    o.speed = 15
    let paddle = o
    o.move = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.w) {
            x = 400 - o.w
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.move(paddle.x - paddle.speed)
    }
    o.moveRight = function() {
        o.move(paddle.x + paddle.speed)

    }
    const aInb = function(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    o.collide = function(ball) {
        // if (ball.y + ball.h > o.y) {
        //     if (ball.x > o.x && ball.x < o.x + o.w) {
        //         log('相撞')
        //         return true
        //     }
        // }
        // return false
        let a = o
        let b = ball
        if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {

            }
        }
    }
    return o
}
