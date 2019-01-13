class Enemy {
    constructor(game, gameSize, center, direction) {
        this.game = game;
        this.gameSize = gameSize;
        this.size = { x: 32, y: 32 };
        this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.x };
        this.oldCenter = { x: this.center.x, y: this.center.y };

        this.spritePosition = {};
        this.spriteDirection = direction;
        this.damage = 1;
        this.health = 4;
    }

    update() {

    }

    draw() {
        const img = document.getElementById("octorok");
        this.game.screen.drawImage(img,
                                   10, 15,
                                   this.size.x / 2, this.size.y / 2,
                                   this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
                                   this.size.x, this.size.y);
    }
}