const Block = function(game, position) {
    // 参数要写全
    // 使用的时候简化用 变量 p 接 position
    // position 是 [0, 0] 格式
    let p = position
    log('block p ', p)
    // block
    let img = game.imageByName('block')
    let o = {
        x: p[0],
        y: p[1],
        alive: true,
        lifes: p[2] || 1,
    }
    o.image = img.image
    o.w = img.w
    o.h = img.h
    o.kill = function() {
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    o.collide = function(b) {
        return o.alive && (reactIntersects(o, b) || reactIntersects(b, o))
    }
    return o
}
