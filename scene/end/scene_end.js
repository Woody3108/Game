class SceneEnd extends WoodScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function() {
            // 跳转到 游戏开始 场景
            let s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    draw() {
        // draw labels
        this.game.context.fillText('游戏结束，按 r 返回标题界面。', 100, 290)
    }
}



// let SceneEnd = function (game) {
//     let s = {
//         game: game,
//     }
//     game.registerAction('r', function() {
//         // 跳转到 游戏开始 场景
//         let s = new SceneTitle(game)
//         game.replaceScene(s)
//     })
//
//     // 初始化
//     s.draw = function () {
//         // draw labels
//         game.context.fillText('游戏结束，按 r 返回标题界面。', 100, 290)
//     }
//     s.update = function () {
//
//     }
//     return s
// }
