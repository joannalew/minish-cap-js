const loadMap = function(game, gameSize, id) {
    let enemies = [];

    if (id === "m00") {
        enemies = [
            // new Enemy(game, gameSize, 0, 150, "up")
        ];
    }

    return { enemies: enemies };
}