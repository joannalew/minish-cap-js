class Door {
    constructor(game, gameSize, x, y, offsetX, offsetY, mapX, mapY) {
        this.game = game;
        this.size = {x : x, y};
        this.center = { x: offsetX + gameSize.x / 2, y: offsetY + gameSize.y - this.size.x };
        this.oldCenter = {x: this.center.x, y: this.center.y};
        this.mapX = mapX;
        this.mapY = mapY;
    }

    update() {

    }

    draw() {
        // this.game.screen.fillRect(this.center.x - this.size.x / 2, 
        //                           this.center.y - this.size.y / 2,
        //                           this.size.x, this.size.y);
    }

    animate() {
        
    }
}