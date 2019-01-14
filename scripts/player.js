class Player {
    constructor(game, gameSize) {
        this.game = game;
        this.gameSize = gameSize;
        this.size = { x: 36, y: 48 };
        this.center = { x: gameSize.x / 2, y: gameSize.y / 2 };
        this.oldCenter = { x: this.center.x, y: this.center.y };

        this.move = 0;
        this.health = 3;
        this.damage = 1;

        this.spriteKey = {
            STAND_FRONT_X: 15,
            STAND_LEFT_X: 51,
            STAND_BACK_X: 79,
            STAND_RIGHT_X: 104,
            STAND_Y: 9,
            WALK_FRONT_X: 15,
            WALK_LEFT_X: 350,
            WALK_BACK_X: 683,
            WALK_RIGHT_X: 1013,
            WALK_Y: 76
        }
        this.spritePosition = { x: this.spriteKey.STAND_FRONT_X, y: this.spriteKey.STAND_Y };
        this.spriteDirection = "down";

        this.walkSpeed = 3;
        this.walkTotalFrames = 10 * this.walkSpeed;
        this.walkCurrentFrame = 0;
        this.walkSpritePosition = { x: this.spriteKey.WALK_FRONT_X, y: this.spriteKey.WALK_Y };

        this.keyboarder = new Keyboarder();
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.animateWalk = this.animateWalk.bind(this);
        this.getLocationX = this.getLocationX.bind(this);
        this.getLocationY = this.getLocationY.bind(this);
    }

    update() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.move = movement(this.game.getBackgroundPositionX() + (this.center.x - this.gameSize.x / 2) - 2,
                                 this.game.getBackgroundPositionY() + (this.center.y - this.gameSize.y / 2));

            if (this.move === 1) {
                this.oldCenter.x = this.center.x;
                this.center.x -= 2;
            }
            else if (this.move === 0) {
                if (this.center.x > this.gameSize.x / 2) {
                    this.center.x -= 2;
                }
                else {
                    this.game.changeBackgroundX(2);
                }
            }

            if (this.spriteDirection !== "left") {
                this.spriteDirection = 'left';
                this.spritePosition = { x: this.spriteKey.STAND_LEFT_X, y: this.spriteKey.STAND_Y };
                this.walkSpritePosition = { x: this.spriteKey.WALK_LEFT_X, y: this.spriteKey.WALK_Y };
            }
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.move = movement(this.game.getBackgroundPositionX() + (this.center.x - this.gameSize.x / 2) + 2,
                                 this.game.getBackgroundPositionY() + (this.center.y - this.gameSize.y / 2));

            if (this.move === 1) {
                this.oldCenter.x = this.center.x;
                this.center.x += 2;
            }
            else if (this.move === 0) {
                if (this.center.x < this.gameSize.x / 2) {
                    this.center.x += 2;
                }
                else {
                    this.game.changeBackgroundX(-2);
                }
            }

            if (this.spriteDirection !== "right") {
                this.spriteDirection = 'right';
                this.spritePosition = { x: this.spriteKey.STAND_RIGHT_X, y: this.spriteKey.STAND_Y };
                this.walkSpritePosition = { x: this.spriteKey.WALK_RIGHT_X, y: this.spriteKey.WALK_Y };
            }
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            this.move = movement(this.game.getBackgroundPositionX() + (this.center.x - this.gameSize.x / 2),
                                 this.game.getBackgroundPositionY() + (this.center.y - this.gameSize.y / 2) - 2);

            if (this.move === 1) {
                this.oldCenter.y = this.center.y;
                this.center.y += -2;
            }
            else if (this.move === 3) {
                this.game.setBackgroundY(-1120);
                this.center.y = 230;
            }
            else if (this.move === 0) {
                if (this.center.y > this.gameSize.y / 2) {
                    this.center.y += -2;
                }
                else {
                    this.game.changeBackgroundY(2);
                }
            }

            if (this.spriteDirection !== "up") {
                this.spriteDirection = 'up';
                this.spritePosition = { x: this.spriteKey.STAND_BACK_X, y: this.spriteKey.STAND_Y };
                this.walkSpritePosition = { x: this.spriteKey.WALK_BACK_X, y: this.spriteKey.WALK_Y };
            }
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
            this.move = movement(this.game.getBackgroundPositionX() + (this.center.x - this.gameSize.x / 2),
                                 this.game.getBackgroundPositionY() + (this.center.y - this.gameSize.y / 2) + 2);

            if (this.move === 1) {
                this.oldCenter.y = this.center.y;
                this.center.y += 2;
            }
            else if (this.move === 3) {
                this.game.setBackgroundY(-1460);
                this.center.y = 130;
            }
            else if (this.move === 0) {
                if (this.center.y < this.gameSize.y / 2) {
                    this.center.y += 2;
                }
                else {
                    this.game.changeBackgroundY(-2);
                }
            }

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
            this.animateWalk(this.spriteKey.WALK_LEFT_X, 6, [0, -2, -3, -4, -6, 0, -2, -3, -1, -6]);
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.animateWalk(this.spriteKey.WALK_RIGHT_X, 6, [0, 0, 0, 0, -1, -1, -1, 0, 1, 1]);
        }
        else {
            const img = document.getElementById("link");
            this.game.screen.drawImage(img,
                this.spritePosition.x, this.spritePosition.y,
                this.size.x / 2, this.size.y / 2,
                this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
                this.size.x, this.size.y);
        }
    }

    animateWalk(reset, sizeOffset = 0, positionOffset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
        const img = document.getElementById("link");
        this.game.screen.drawImage(img,
            this.walkSpritePosition.x + positionOffset[parseInt(this.walkCurrentFrame / this.walkSpeed)],
            this.walkSpritePosition.y,
            this.size.x / 2 + sizeOffset, this.size.y / 2 + sizeOffset,
            this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
            this.size.x + sizeOffset * 2, this.size.y + sizeOffset * 2);
        this.walkCurrentFrame += 1

        if (this.walkCurrentFrame % this.walkSpeed === 0) {
            this.walkSpritePosition.x += 32;
        }

        if (this.walkCurrentFrame === this.walkTotalFrames) {
            this.walkSpritePosition.x = reset;
            this.walkCurrentFrame = 0
        }
    }

    animateAttack() {

    }

    getLocationX() {
        return this.center.x;
    }

    getLocationY() {
        return this.center.y;
    }
};