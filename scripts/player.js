class Player {
    constructor(game, gameSize) {
        this.game = game;
        this.gameSize = gameSize;
        this.size = {x: 36, y: 48};
        this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.x };
        this.oldCenter = { x: this.center.x, y: this.center.y };
    
        this.spriteKey = {
            STAND_FRONT_X: 15,
            STAND_LEFT_X: 51, 
            STAND_BACK_X: 79,
            STAND_Y: 9,
            WALK_FRONT_X: 15,
            WALK_Y: 76
        }
        this.spritePosition = { x: this.spriteKey.STAND_FRONT_X, y: this.spriteKey.STAND_Y };
        this.spriteFlipped = false;

        this.walkTotalFrames = 10;
        this.walkCurrentFrames = 0;
        this.walkSpritePosition = { x: this.spriteKey.WALK_FRONT_X, y: this.spriteKey.WALK_Y };

        this.keyboarder = new Keyboarder();
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.animate = this.animate.bind(this);
    }

    update() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.spritePosition = { x: this.spriteKey.STAND_LEFT_X, y: this.spriteKey.STAND_Y };
            this.spriteFlipped = false;
            this.oldCenter.x = this.center.x;
            this.center.x -= 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.spritePosition = { x: this.spriteKey.STAND_LEFT_X, y: this.spriteKey.STAND_Y };
            this.spriteFlipped = true;
            this.oldCenter.x = this.center.x;
            this.center.x += 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            this.spritePosition = { x: this.spriteKey.STAND_BACK_X, y: this.spriteKey.STAND_Y };
            this.spriteFlipped = false;
            this.oldCenter.y = this.center.y;
            this.center.y -= 2;
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
            this.spritePosition = { x: this.spriteKey.STAND_FRONT_X, y: this.spriteKey.STAND_Y };
            this.spriteFlipped = false;
            this.oldCenter.y = this.center.y;
            this.center.y += 2;
        }
    }

    draw() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
            this.animate()
        }
        else {
            this.game.screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
            const img = document.getElementById("link");
            this.game.screen.drawImage(img, 
                                    this.spritePosition.x, this.spritePosition.y,
                                    this.size.x / 2, this.size.y / 2,
                                    this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
                                    this.size.x, this.size.y );
        }
    }

    animate() {
        this.game.screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
        const img = document.getElementById("link");
        this.game.screen.drawImage(img, 
                                   this.walkSpritePosition.x, this.walkSpritePosition.y,
                                   this.size.x / 2, this.size.y / 2,
                                   this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
                                   this.size.x, this.size.y );
        this.walkSpritePosition.x += 32;
        this.walkCurrentFrames += 1

        if (this.walkCurrentFrames === this.walkTotalFrames) {
            this.walkSpritePosition.x = this.spriteKey.WALK_FRONT_X;
            this.walkCurrentFrames = 0
        }

        requestAnimationFrame(this.animate);
    }
};