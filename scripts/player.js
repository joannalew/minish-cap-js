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
            WALK_Y: 76,
            ATTACK_FRONT_X: 14,
            ATTACK_LEFT_X: 180,
            ATTACK_BACK_X: 319,
            ATTACK_RIGHT_X: 498,
            ATTACK_Y: 113
        }

        this.spriteImage = document.getElementById("link");
        this.spritePosition = { x: this.spriteKey.STAND_FRONT_X, y: this.spriteKey.STAND_Y };
        this.spriteDirection = "down";

        this.walkSpeed = 3;
        this.stepSize = 2;
        this.walkTotalFrames = 10 * this.walkSpeed;
        this.walkCurrentFrame = 0;
        this.walkSpritePosition = { x: this.spriteKey.WALK_FRONT_X, y: this.spriteKey.WALK_Y };

        this.attackSpeed = 3;
        this.attackTotalFramesFB = 5 * this.attackSpeed;
        this.attackTotalFramesLR = 4 * this.attackSpeed;
        this.attackCurrentFrame = 0;
        this.attackSpritePosition = { x: this.spriteKey.ATTACK_FRONT_X, y: this.spriteKey.ATTACK_Y };

        this.keyboarder = new Keyboarder();
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.animateWalk = this.animateWalk.bind(this);
        this.animateAttack = this.animateAttack.bind(this);
        this.animateSword = this.animateSword.bind(this);
        this.animateSwordHelper = this.animateSwordHelper.bind(this);
        this.getLocationX = this.getLocationX.bind(this);
        this.getLocationY = this.getLocationY.bind(this);
    }

    update() {
        if (this.attackCurrentFrame === 0) {
            if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
                this.move = movement(this.game.getBackgroundPositionX() + (this.center.x - this.gameSize.x / 2) - 2,
                    this.game.getBackgroundPositionY() + (this.center.y - this.gameSize.y / 2));

                if (this.move === 1) {
                    this.oldCenter.x = this.center.x;
                    this.center.x -= this.stepSize;
                }
                else if (this.move === 0) {
                    if (this.center.x > this.gameSize.x / 2) {
                        this.center.x -= this.stepSize;
                    }
                    else {
                        this.game.changeBackgroundX(this.stepSize);
                    }
                }

                if (this.spriteDirection !== "left") {
                    this.spriteDirection = 'left';
                    this.spritePosition = { x: this.spriteKey.STAND_LEFT_X, y: this.spriteKey.STAND_Y };
                    this.walkSpritePosition = { x: this.spriteKey.WALK_LEFT_X, y: this.spriteKey.WALK_Y };
                    this.attackSpritePosition = { x: this.spriteKey.ATTACK_LEFT_X, y: this.spriteKey.ATTACK_Y };
                }
            }
            else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
                this.move = movement(this.game.getBackgroundPositionX() + (this.center.x - this.gameSize.x / 2) + 2,
                    this.game.getBackgroundPositionY() + (this.center.y - this.gameSize.y / 2));

                if (this.move === 1) {
                    this.oldCenter.x = this.center.x;
                    this.center.x += this.stepSize;
                }
                else if (this.move === 0) {
                    if (this.center.x < this.gameSize.x / 2) {
                        this.center.x += this.stepSize;
                    }
                    else {
                        this.game.changeBackgroundX(-1 * this.stepSize);
                    }
                }

                if (this.spriteDirection !== "right") {
                    this.spriteDirection = 'right';
                    this.spritePosition = { x: this.spriteKey.STAND_RIGHT_X, y: this.spriteKey.STAND_Y };
                    this.walkSpritePosition = { x: this.spriteKey.WALK_RIGHT_X, y: this.spriteKey.WALK_Y };
                    this.attackSpritePosition = { x: this.spriteKey.ATTACK_RIGHT_X, y: this.spriteKey.ATTACK_Y };
                }
            }
            else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
                this.move = movement(this.game.getBackgroundPositionX() + (this.center.x - this.gameSize.x / 2),
                    this.game.getBackgroundPositionY() + (this.center.y - this.gameSize.y / 2) - this.stepSize);

                if (this.move === 1) {
                    this.oldCenter.y = this.center.y;
                    this.center.y += -1 * this.stepSize;
                }
                else if (this.move === 3) {
                    this.game.setBackgroundY(-1120);
                    this.center.y = 230;
                }
                else if (this.move === 0) {
                    if (this.center.y > this.gameSize.y / 2) {
                        this.center.y += -1 * this.stepSize;
                    }
                    else {
                        this.game.changeBackgroundY(this.stepSize);
                    }
                }

                if (this.spriteDirection !== "up") {
                    this.spriteDirection = 'up';
                    this.spritePosition = { x: this.spriteKey.STAND_BACK_X, y: this.spriteKey.STAND_Y };
                    this.walkSpritePosition = { x: this.spriteKey.WALK_BACK_X, y: this.spriteKey.WALK_Y };
                    this.attackSpritePosition = { x: this.spriteKey.ATTACK_BACK_X, y: this.spriteKey.ATTACK_Y };
                }
            }
            else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
                this.move = movement(this.game.getBackgroundPositionX() + (this.center.x - this.gameSize.x / 2),
                    this.game.getBackgroundPositionY() + (this.center.y - this.gameSize.y / 2) + 2);

                if (this.move === 1) {
                    this.oldCenter.y = this.center.y;
                    this.center.y += this.stepSize;
                }
                else if (this.move === 3) {
                    this.game.setBackgroundY(-1460);
                    this.center.y = 130;
                }
                else if (this.move === 0) {
                    if (this.center.y < this.gameSize.y / 2) {
                        this.center.y += this.stepSize;
                    }
                    else {
                        this.game.changeBackgroundY(-1 * this.stepSize);
                    }
                }

                if (this.spriteDirection !== "down") {
                    this.spriteDirection = 'down';
                    this.spritePosition = { x: this.spriteKey.STAND_FRONT_X, y: this.spriteKey.STAND_Y };
                    this.walkSpritePosition = { x: this.spriteKey.WALK_FRONT_X, y: this.spriteKey.WALK_Y };
                    this.attackSpritePosition = { x: this.spriteKey.ATTACK_FRONT_X, y: this.spriteKey.ATTACK_Y };
                }
            }
            else if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
                const bodies = this.game.getBodies();
                for (let i = 1; i < bodies.length; i++) {
                    if ((Math.abs(bodies[i].center.x - this.center.x) < 58) && 
                        (Math.abs(bodies[i].center.y - this.center.y) < 58)) {
                            bodies[i].health -= 1;
                        }
                    }
            }
        }
    }

    draw() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE) || this.attackCurrentFrame != 0) {
            if (this.spriteDirection === "down") {
                this.animateAttack(this.spriteKey.ATTACK_FRONT_X, 0, [0, 0, 1, 2, 2]);
            }
            else if (this.spriteDirection === "up") {
                this.animateAttack(this.spriteKey.ATTACK_BACK_X);
            }
            else if (this.spriteDirection === "left") {
                this.animateAttack(this.spriteKey.ATTACK_LEFT_X, 2, [0, 0, -4, -8]);
            }
            else {
                this.animateAttack(this.spriteKey.ATTACK_RIGHT_X, 2, [0, 0, -4, -7]);
            }
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
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
            this.game.screen.drawImage(this.spriteImage,
                this.spritePosition.x, this.spritePosition.y,
                this.size.x / 2 + 2, this.size.y / 2,
                this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
                this.size.x + 2, this.size.y);
        }
    }

    animateWalk(reset, sizeOffset = 0, positionOffset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
        this.game.screen.drawImage(this.spriteImage,
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
            this.walkCurrentFrame = 0;
        }
    }

    animateAttack(reset, sizeOffset = 0, positionOffset = [0, 0, 0, 0, 0]) {
        const totalFrames = (this.spriteDirection === "up" || this.spriteDirection === "down") ? this.attackTotalFramesFB : this.attackTotalFramesLR;
        this.animateSword(parseInt(this.attackCurrentFrame / this.attackSpeed));

        this.game.screen.drawImage(this.spriteImage,
            this.attackSpritePosition.x + positionOffset[parseInt(this.attackCurrentFrame / this.attackSpeed)],
            this.attackSpritePosition.y,
            this.size.x / 2 + sizeOffset, this.size.y / 2,
            this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
            this.size.x + sizeOffset, this.size.y);
        this.attackCurrentFrame += 1;

        if (this.attackCurrentFrame % this.attackSpeed === 0) {
            this.attackSpritePosition.x += 32;
        }

        if (this.attackCurrentFrame === totalFrames) {
            this.attackSpritePosition.x = reset;
            this.attackCurrentFrame = 0;
        }
    }

    animateSword(frameId) {
        if (frameId === 0) {
            if (this.spriteDirection === "down") {
                this.animateSwordHelper(-33, 14, 0);
            }
            else if (this.spriteDirection === "up") {
                this.animateSwordHelper(69, 45, 180);
            }
        }
        else if (frameId === 1) {
            if (this.spriteDirection === "down") {
                this.animateSwordHelper(-31, 52, -50);
            }
            else if (this.spriteDirection === "left") {
                this.animateSwordHelper(-27, -4, 22);
            }
            else if (this.spriteDirection === "up") {
                this.animateSwordHelper(67, 10, 135);
            }
            else if (this.spriteDirection === "right") {
                this.animateSwordHelper(70, 7, 135);
            }
        }
        else if (frameId === 2) {
            if (this.spriteDirection === "down") {
                this.animateSwordHelper(-31, 48, -45);
            }
            else if (this.spriteDirection === "left") {
                this.animateSwordHelper(-32, 10, 0);
            }
            else if (this.spriteDirection === "right") {
                this.animateSwordHelper(73, 40, 180);
            }
        }
        else if (frameId === 3) {
            if (this.spriteDirection === "down") {
                this.animateSwordHelper(-3, 80, -90);
            }
            else if (this.spriteDirection === "left") {
                this.animateSwordHelper(-27, -5, 23);
            }
            else if (this.spriteDirection === "right") {
                this.animateSwordHelper(75, 22, 154);
            }
        }
        else {
            if (this.spriteDirection === "down") {
                this.animateSwordHelper(30, 73, -135);
            }
        }
    }

    animateSwordHelper(offsetX, offsetY, angle) {
        this.game.screen.save();
        this.game.screen.translate(offsetX + this.center.x - this.size.x / 2, offsetY + this.center.y - this.size.y / 2);
        this.game.screen.rotate((Math.PI / 180) * angle);
        this.game.screen.translate(-1 * (offsetX + this.center.x - this.size.x / 2), -1 * (offsetY + this.center.y - this.size.y / 2));

        this.game.screen.drawImage(this.spriteImage,
            14, 280,
            this.size.x / 2, this.size.y / 2,
            offsetX + this.center.x - this.size.x / 2,
            offsetY + this.center.y - this.size.y / 2,
            this.size.x, this.size.y);
        this.game.screen.restore();
    }

    getLocationX() {
        return this.center.x;
    }

    getLocationY() {
        return this.center.y;
    }
};