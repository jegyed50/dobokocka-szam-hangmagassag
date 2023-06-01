let dice = 0
input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    220 * dice,
    220 * dice,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.InBackground)
    basic.showNumber(dice)
})
basic.forever(function () {
	
})
