input.onButtonPressed(Button.A, function () {
    if (paddleA.get(LedSpriteProperty.X) > 0) {
        paddleA.change(LedSpriteProperty.X, -1)
        paddleB.change(LedSpriteProperty.X, -1)
    }
    music.playMelody("C - - - - - - - ", 3000)
})
input.onButtonPressed(Button.B, function () {
    if (paddleA.get(LedSpriteProperty.X) < 3) {
        paddleA.change(LedSpriteProperty.X, 1)
        paddleB.change(LedSpriteProperty.X, 1)
    }
    music.playMelody("C - - - - - - - ", 3000)
})
let paddleB: game.LedSprite = null
let paddleA: game.LedSprite = null
paddleA = game.createSprite(2, 4)
paddleB = game.createSprite(3, 4)
let Ball = game.createSprite(randint(0, 10), 0)
let directionY = 1
let directionX = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
    Ball.change(LedSpriteProperty.X, directionX)
    Ball.change(LedSpriteProperty.Y, directionY)
    if (Ball.isTouching(paddleA) || Ball.isTouching(paddleB)) {
        Ball.change(LedSpriteProperty.X, directionX * -1)
        Ball.change(LedSpriteProperty.Y, -1)
        directionY = -1
        directionX = randint(-1, 1)
        music.playMelody("- - - - - - - C5 ", 5000)
    } else {
        if (Ball.get(LedSpriteProperty.Y) <= 0) {
            directionY = 1
            directionX = randint(-1, 1)
        } else if (Ball.get(LedSpriteProperty.Y) >= 4) {
            Ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(200)
            music.playMelody("C5 B A G F E D C ", 500)
            game.gameOver()
        }
        if (Ball.get(LedSpriteProperty.X) <= 0) {
            directionX = 1
        } else if (Ball.get(LedSpriteProperty.X) >= 4) {
            directionX = -1
        } else {
            basic.pause(500)
        }
    }
})
