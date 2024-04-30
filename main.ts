input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Warten += 5
    basic.showString("Ihre Bestellung kommt")
    Ab = 5
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Warten += 5
    basic.showString("Theo kommt gleich")
    Ab = 5
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Warten += 5
})
let B = 0
let A = 0
let Ab = 0
let Warten = 0
radio.setGroup(10000000000)
basic.forever(function () {
    if (Ab == 5) {
        radio.sendString("Kundenrat")
        Ab = 0
    }
    if (A == 5) {
        radio.sendString("Getreank")
        A = 0
    }
    if (B == 5) {
        radio.sendString(" Eis")
        B = 0
    }
    if (Warten == 5) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Warten = 0
    }
})
