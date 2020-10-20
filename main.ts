namespace SpriteKind {
    export const goal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite3)) {
        game.showLongText("雲雀なんて読む？？", DialogLayout.Bottom)
        if (game.askForString("") == "hibari") {
            game.showLongText("せいか～～～～～～～い！！", DialogLayout.Bottom)
            tiles.setWallAt(tiles.getTileLocation(13, 9), false)
        } else {
            game.showLongText("誰だお前！！", DialogLayout.Bottom)
            game.over(false)
        }
        music.baDing.play()
        mySprite3.destroy(effects.fire, 500)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    game.over(true)
})
let mySprite: Sprite = null
let mySprite3: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030303030303030303030303020202020202020202020202020202020201010101010101010103020301010202010101010101010101030203010102020101010101010101010302030101020201010101010101010103020301010202010101010101010101030203010102020101010101010101010302030101020201010101010101010103020301010202010101010101010101010101010102020101010101010101010101040301020201010101010101010101030203010202010101010101010101010302030102020101010101010101010103020301020201010101010101010101030203010203030303030303030303030303030303`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . 2 2 2 . . 2 
    2 . . . . . . . . . 2 2 2 . . 2 
    2 . . . . . . . . . 2 2 2 . . 2 
    2 . . . . . . . . . 2 2 2 . . 2 
    2 . . . . . . . . . 2 2 2 . . 2 
    2 . . . . . . . . . 2 2 2 . . 2 
    2 . . . . . . . . . 2 2 2 . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . 2 2 . 2 
    2 . . . . . . . . . . 2 2 2 . 2 
    2 . . . . . . . . . . 2 2 2 . 2 
    2 . . . . . . . . . . 2 2 2 . 2 
    2 . . . . . . . . . . 2 2 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.tileGrass1], TileScale.Sixteen))
mySprite3 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(12, 9))
let mySprite2 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.goal)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 4))
mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 3 f f . . 
    . . f d f f 3 5 5 3 f d f . . . 
    . . . f f 3 3 3 3 3 f d f . . . 
    . . . f 3 3 5 3 3 5 3 f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 6))
scene.cameraFollowSprite(mySprite)
tiles.setWallAt(tiles.getTileLocation(13, 9), true)
