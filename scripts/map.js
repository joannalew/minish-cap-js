const loadMap = function(game, gameSize, id) {
    let enemies = [];

    if (id === "m00") {
        enemies = [
            new Enemy(game, gameSize, 0, 150, 1, "up"),
            new Enemy(game, gameSize, 0, -550, 2, "down"),
            new Enemy(game, gameSize, -200, -250, 3, "left"),
            new Enemy(game, gameSize, -100, 650, 4, "left"),
            new Enemy(game, gameSize, 100, 650, 5, "up"),
            new Enemy(game, gameSize, 0, 450, 6, "right"),
            new Enemy(game, gameSize, 0, -350, 7, "up"),
            new Enemy(game, gameSize, 200, -250, 8, "right")
        ];
    }

    return { enemies: enemies };
}