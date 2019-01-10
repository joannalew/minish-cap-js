class Wall {
    constructor(game, gameSize, x, y, offsetX, offsetY) {
        this.game = game;
        this.size = {x : x, y};
        this.center = { x: offsetX + gameSize.x / 2, y: offsetY + gameSize.y - this.size.x };
        this.oldCenter = {x: this.center.x, y: this.center.y};
    }

    update() {

    }

    draw() {
        this.game.screen.clearRect(0, 0, 480, 320);

        this.game.screen.fillRect(this.center.x - this.size.x / 2, 
                                  this.center.y - this.size.y / 2,
                                  this.size.x, this.size.y);
    }
}