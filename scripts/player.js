class Player {
    constructor(game, gameSize) {
        this.game = game;
        this.size = {x: 35, y: 45};
        this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.x };
        this.oldCenter = { x: this.center.x, y: this.center.y };
    
        this.spritePosition = { x: -29, y: -17 };
        this.spriteFlipped = false;

        this.keyboarder = new Keyboarder();
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
    }

    update() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.spritePosition = { x: -102, y: -17 };
            this.spriteFlipped = false;
            this.oldCenter.x = this.center.x;
            this.center.x -= 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.spritePosition = { x: -102, y: -17 };
            this.spriteFlipped = true;
            this.oldCenter.x = this.center.x;
            this.center.x += 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            this.spritePosition = { x: -157, y: -17 };
            this.spriteFlipped = false;
            this.oldCenter.y = this.center.y;
            this.center.y -= 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
            this.spritePosition = { x: -29, y: -17 };
            this.spriteFlipped = false;
            this.oldCenter.y = this.center.y;
            this.center.y += 2;
        }
    }

    draw() {
        const link = document.getElementById("link");
        link.style.transform = (!this.spriteFlipped) ? "none" : "rotateY(180deg)";
        link.style.backgroundPosition = `${this.spritePosition.x}px ${this.spritePosition.y}px`;
        link.style.left = this.center.x - this.size.x / 2;
        link.style.top = this.center.y - this.size.y / 2;
    }
};