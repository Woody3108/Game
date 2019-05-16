const Block = function(position) {
    // 参数要写全
    // 使用的时候简化用 变量 p 接 position
    // position 是 [0, 0] 格式
    let p = position
    log('block p ', p)
    // block
    let image = imageFromPath('block.png')
    let o = {
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
        //
        lifes: p[2] || 1,
    }
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


const getArr = function (num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}

getArr(3)
