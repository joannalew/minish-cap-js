const Keyboarder = function() {
    const keyState = {};

    window.onkeydown = ({keyCode}) => {
        keyState[keyCode] = true;
    };

    window.onkeyup = ({keyCode}) => {
        keyState[keyCode] = false;
    };

    this.isDown = keyCode => keyState[keyCode] === true;
    this.KEYS = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
};