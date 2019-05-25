class SceneTitle extends WoodScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function() {
            // 跳转到 游戏主 场景
            let s = Scene(game)
            game.replaceScene(s)
        })
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    draw() {
        // draw labels
        this.game.context.fillText('按住 k 开始游戏：', 100, 100)
    }
}


// let SceneTitle = function (game) {
//     let s = {
//         game: game,
//     }
//     game.registerAction('k', function() {
//         // 跳转到 游戏主 场景
//         let s = Scene(game)
//         game.replaceScene(s)
//     })
//
//     // 初始化
//     s.draw = function () {
//         // draw labels
//         game.context.fillText('按住 k 开始游戏：', 100, 100)
//     }
//     s.update = function () {
//
//     }
//     return s
// }
