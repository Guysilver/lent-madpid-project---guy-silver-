controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 3 3 3 3 2 e . . . . 
        . . . 2 3 d 1 1 d d 3 2 e . . . 
        . . 2 3 1 d 3 3 3 d d 3 e . . . 
        . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
        . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
        2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
        2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
        2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
        2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
        e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
        e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
        e 3 d 3 3 1 d d 3 d 1 b b e e . 
        . e 3 1 1 d d 1 1 1 b b e e e . 
        . . e 3 3 3 3 3 3 b e e e e . . 
        . . . e e e e e e e e e e . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
    scene.cameraShake(4, 500)
})
let Enemies: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff......ccc.
    .ffefbf44fbfeff....cddc.
    .ffefbf44fbfeff...cddc..
    .fee4dddddd4eef.ccddc...
    fdfeeddddd4eeffecddc....
    fbffee4444ee4fddccc.....
    fbf4f222222f1edde.......
    fcf.f222222f44ee........
    .ff.f445544f............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    Enemies = sprites.create(img`
        . . . . . . . . . 3 . . . . . . 
        . . . . . . . . 3 3 . . . . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . . . . 3 3 . . . . . . 
        . . . . . . . . . 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Enemies.x = scene.screenWidth()
    Enemies.vx = -20
    Enemies.y = randint(10, scene.screenHeight() - -10)
})
