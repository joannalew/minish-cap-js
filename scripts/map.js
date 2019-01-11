const loadMap = function(game, gameSize, id) {
    let doors = [];
    let walls = [];

    if (id === 0) {
        walls = [
            new Wall(game, gameSize, 100, 35, 0, -155),
            new Wall(game, gameSize, 5, 80, -67, -40),
            new Wall(game, gameSize, 5, 80, 80, -40),
            new Wall(game, gameSize, 5, 120, 60, -140),
            new Wall(game, gameSize, 5, 120, -47, -140),
            new Wall(game, gameSize, 5, 40, 50, -220),
            new Wall(game, gameSize, 5, 40, -37, -220),
            new Wall(game, gameSize, 20, 10, -45, -70),
            new Wall(game, gameSize, 20, 10, 58, -70)
        ];
        
        doors = [
            new Door(game, gameSize, 100, 5, 0, -135, 0, 1),
            new Door(game, gameSize, 120, 2, 0, 120, 0, -1)
        ];
    }

    return { doors: doors, walls: walls };
}