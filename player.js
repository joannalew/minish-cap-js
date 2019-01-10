class Player {
    constructor(game, gameSize) {
        this.game = game;
        this.size = {x: 15, y: 15};
        this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.x };
    
        this.keyboarder = new Keyboarder();
        this.update = this.update.bind(this);
    }

    update() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.center.x -= 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.center.x += 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            this.center.y -= 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
            this.center.y += 2;
        }
    }
};