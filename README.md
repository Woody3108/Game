# Game
Game1【打砖块1】------>
    1-27：挡板移动，0分代码；
    28-58：代码拆分成函数；（解决：1、定义一个入口；2、把所有的代码放到一个入口中）
    59：梳理结构；
    60-81：球

Game2【打砖块2】------>
    1-24：砖块
    25-26，37-42：解决相撞bug
    27-33：解决挡板左右移动范围（在画布中）
    43-53：多个砖块
    54-62：优化代码（将复杂程序拆分）
    63-80：关卡
    81-83：enableDebugMode函数
    83-105：速度调节功能

Game3【打砖块3】------>
    1-8：分数显示
    9-13：在界面上显示日志 log 信息
    10：log 函数真香（1、字少；2、可以自己加功能，或者废掉；真香；）
    14-42：加载图片，解决异步的方案 Wood（绕晕了，哈哈^_^~）
    
Game4【打砖块4】------>
    1-11：更换图片，加上背景
    12-18：碰撞检测
    19-43：拖动球的功能（方便debug）
    23：如何搜索
    33：判断一个点是否在矩形之内（函数）
    
Game5【打砖块5】------>
    1-29：场景拆分 game.draw
    30-33：思路梳理（载入图片--->初始化scene--->run game）
    40：球到底部 GameOver（SceneEnd）
    
Game6【打砖块6】------>
    1-7，10-12：文件归类（img）
    8：关卡编辑
    9：写一个拖像素的工具~~~手动狗头🐶
    13-18：游戏开始场景（title） 和 游戏结束场景（end）
    18-29：面向对象，复用 title 和 end 场景（少写重复代码）
    30-36：藏 new
    37-53：Wood_game 重构(类，面向对象)
    54-58：游戏只初始化一次（单例模式）
    
Game7【打飞机1】------>
    1-17：聊天，手动狗头🐶
    18-26：Wood_image.js
    27-30：画出背景
    31，35-38：程序自动 draw 所有的东西（思路）
           （添加到场景中的元素，自动的被 draw）
    32-34：飞机移动
    39-42：addElement
    43-50：聊天（买包原来在这里🐶）
    
Game8【打飞机2】------>
    1-9：飞机（player）上下左右移动
    10-22：敌机（enemy）
    23：云（cloud）
    24-28：发子弹
    29：调速度
    30-31：子弹冷却时间
    32-40：动态调整(玩家速度)
    41-42：动态调整(子弹速度)
    43-45：动态调整(云速度)
    46-52：debug
    
Game9【打飞机3】------>
    7-15：WoodLabel
    16-35：爆炸
    36-39：粒子加速度，重力
    40-43：小火花消失（生命值）
    45：加入爆炸到游戏中
    
Game10【游戏中的动画】------>
    1-3：整理代码
    4-5：动画思路
    6-14：动画功能实现
    14-18：左右移动(let self = this)
    19-29：多状态动画(闲置、跑动)
    30-38：keyUp的时候 从 跑步 变到 闲置
    39-40：多个 if else （表驱动法）
    41-52： 转身，水平翻转(canvas flipx)
    43：找动图素材（free game sprite）
        // https://www.gameart2d.com/freebies.html
    53-54：背景
    
Game11【flappy bird】------>
    1-2：素材
    3-11：循环移动地面
    13-18：鸟（重力，加速度, 左右移动，jump）
    19-24：jump抬头（旋转角度）
    25-26：鸟的三个状态在同一张图片上，实现翅膀动（ctx.drawImage(...坐标)）
    27-38：闲聊
    39-41：消失效果globalAlpha
    
Game12【flappy bird2】------>
    5-18：加入管子
    19-31：动态调整管子间距（自动配置）
    38-45：配置debug
    45-48：配置小鸟的速度
