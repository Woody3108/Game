const log = console.log.bind(console)

// 可以对 log 进行一些骚操作
// 比如让 log 实时显示在页面上
// 或者让 log 废弃（写一个空函数）
// const log = function (s) {
//     e('#id-text-log').value += '\n' + s
// }

const e = selector => document.querySelector(selector)

const imageFromPath = function(path) {
    let img = new Image();
    img.src = path;
    return img
}

const reactIntersects = function (a, b) {
    let o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            log('相撞')
            return true
        }
    }
    return false
}

const randomBetween = function(start, end) {
    let n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
