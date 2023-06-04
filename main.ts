let x = 0
let y = 0
function _set (xpos: number, ypos: number) {
    x = xpos
    y = ypos
    led.plot(x, y)
}
function cross (change_x: number, _change_y: number) {
    _set(2, 2)
    for (let index = 0; index < 2; index++) {
        basic.pause(500)
        y += _change_y
        x += change_x
        led.plot(x, y)
    }
}
function cross2 (change_x: number, _change_y: number) {
    _set(2, 2)
    for (let index = 0; index < 2; index++) {
        basic.pause(500)
        y += _change_y
        x += change_x
        led.plot(x, y)
    }
}
basic.forever(function () {
    cross(1, -1)
    cross(1, 1)
    cross(-1, 1)
    cross(-1, -1)
    basic.pause(1000)
})
