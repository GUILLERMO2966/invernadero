input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 8) {
        basic.showString("T.MINIMA")
    } else {
        if (input.temperature() > 34) {
            basic.showString("T.MAXIMA")
        } else {
            basic.showString("T.NORMAL")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showString("H.MININA")
    } else {
        if (pins.analogReadPin(AnalogPin.P0) > 600) {
            basic.showString("H.MAXIMA")
        } else {
            basic.showString("H.NORMAL")
        }
    }
})
