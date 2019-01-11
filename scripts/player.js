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
            WALK_LEFT_X: 350,
            WALK_BACK_X: 683,
            WALK_Y: 76
        }
        this.spritePosition = { x: this.spriteKey.STAND_FRONT_X, y: this.spriteKey.STAND_Y };
        this.spriteDirection = "down";

        this.walkSpeed = 3;
        this.walkTotalFrames = 10 * this.walkSpeed;
        this.walkCurrentFrames = 0;
        this.walkSpritePosition = { x: this.spriteKey.WALK_FRONT_X, y: this.spriteKey.WALK_Y };

        this.keyboarder = new Keyboarder();
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.animateWalk = this.animateWalk.bind(this);
    }

    update() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.oldCenter.x = this.center.x;
            this.center.x -= 2;

            if (this.spriteDirection !== "left") {
                this.spriteDirection = 'left';
                this.spritePosition = { x: this.spriteKey.STAND_LEFT_X, y: this.spriteKey.STAND_Y };
                this.walkSpritePosition = { x: this.spriteKey.WALK_LEFT_X, y: this.spriteKey.WALK_Y };
            }
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.oldCenter.x = this.center.x;
            this.center.x += 2;

            if (this.spriteDirection !== "right") {
                this.spriteDirection = 'right';
                this.spritePosition = { x: this.spriteKey.STAND_LEFT_X, y: this.spriteKey.STAND_Y };
                this.walkSpritePosition = { x: this.spriteKey.WALK_LEFT_X, y: this.spriteKey.WALK_Y };
            }
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            this.oldCenter.y = this.center.y;
            this.center.y -= 2;

            if (this.spriteDirection !== "up") {
                this.spriteDirection = 'up';
                this.spritePosition = { x: this.spriteKey.STAND_BACK_X, y: this.spriteKey.STAND_Y };
                this.walkSpritePosition = { x: this.spriteKey.WALK_BACK_X, y: this.spriteKey.WALK_Y };
            }
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
            this.oldCenter.y = this.center.y;
            this.center.y += 2;
            
            if (this.spriteDirection !== "down") {
                this.spriteDirection = 'down';
                this.spritePosition = { x: this.spriteKey.STAND_FRONT_X, y: this.spriteKey.STAND_Y };
                this.walkSpritePosition = { x: this.spriteKey.WALK_FRONT_X, y: this.spriteKey.WALK_Y };
            }
        }
    }

    draw() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
            this.animateWalk(this.spriteKey.WALK_FRONT_X);
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            this.animateWalk(this.spriteKey.WALK_BACK_X);
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.animateWalk(this.spriteKey.WALK_LEFT_X);
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.animateWalk(this.spriteKeyWALK_LEFT_X);
        }
        else {
            this.game.screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
            const img = document.getElementById("link");
            this.game.screen.drawImage(img, 
                                    this.walkSpritePosition.x, this.walkSpritePosition.y,
                                    this.size.x / 2, this.size.y / 2,
                                    this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
                                    this.size.x, this.size.y);
        }
    }

    animateWalk(reset) {
        this.game.screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
        const img = document.getElementById("link");
        this.game.screen.drawImage(img, 
                                   this.walkSpritePosition.x, this.walkSpritePosition.y,
                                   this.size.x / 2, this.size.y / 2,
                                   this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
                                   this.size.x, this.size.y );
        this.walkCurrentFrames += 1

        if (this.walkCurrentFrames % this.walkSpeed === 0) {
            this.walkSpritePosition.x += 32;
        }

        if (this.walkCurrentFrames === this.walkTotalFrames) {
            this.walkSpritePosition.x = reset;
            this.walkCurrentFrames = 0
        }
    }
};