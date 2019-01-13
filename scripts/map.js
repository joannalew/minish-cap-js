const loadMap = function(game, gameSize, id) {
    let doors = [];
    let walls = [];
    let enemies = [];

    if (id === "m00") {
        // walls = [
        //     new Wall(game, gameSize, 100, 35, 0, -155),
        //     new Wall(game, gameSize, 5, 80, -67, -40),
        //     new Wall(game, gameSize, 5, 80, 67, -40),
        //     new Wall(game, gameSize, 5, 120, -47, -140),
        //     new Wall(game, gameSize, 5, 120, 47, -140),
        //     new Wall(game, gameSize, 5, 40, -37, -220),
        //     new Wall(game, gameSize, 5, 40, 37, -220),
        //     new Wall(game, gameSize, 20, 10, -45, -70),
        //     new Wall(game, gameSize, 20, 10, 45, -70)
        // ];
        
        // doors = [
        //     new Door(game, gameSize, 100, 5, 0, -135, 0, 1, "m01"),
        //     new Door(game, gameSize, 120, 2, 0, 120, 0, -1, "m0-1")
        // ];

        // enemies = [
        //     new Enemy(game, gameSize, "up")
        // ];
    }
    else if (id == "m01") {
        // walls = [
        //     new Wall(game, gameSize, 60, 140, -130, -195),
        //     new Wall(game, gameSize, 60, 140, 130, -195),
        //     new Wall(game, gameSize, 50, 35, -220, -250),
        //     new Wall(game, gameSize, 50, 35, 220, -250),
        //     new Wall(game, gameSize, 120, 40, -115, 55),
        //     new Wall(game, gameSize, 120, 40, 115, 55),
        //     new Wall(game, gameSize, 120, 30, -180, 85),
        //     new Wall(game, gameSize, 120, 30, 180, 85)
        // ]

        // doors = [
        //     new Door(game, gameSize, 100, 2, 0, 60, 0, -1, "m00"),
        //     new Door(game, gameSize, 130, 2, 0, -190, 0, 1, "m02"),
        //     new Door(game, gameSize, 2, 200, -235, -150, -1, 0, "m-11")
        // ]
    }

    return { doors: doors, walls: walls, enemies: enemies };
}