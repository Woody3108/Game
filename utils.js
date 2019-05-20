const log = console.log.bind(console)

const e = selector => document.querySelector(selector)
// const log = function (s) {
//     e('#id-text-log').value += '\n' + s
// }
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
