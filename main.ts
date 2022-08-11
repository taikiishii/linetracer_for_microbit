basic.forever(function () {
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P2)))
    if (pins.analogReadPin(AnalogPin.P1) > 250) {
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P16, 0)
    } else {
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
    if (pins.analogReadPin(AnalogPin.P2) > 250) {
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.analogWritePin(AnalogPin.P14, 0)
    } else {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
    }
})
