class Enemy {
    constructor(game, gameSize, offsetX, offsetY, direction) {
        this.game = game;
        this.gameSize = gameSize;
        this.size = { x: 38, y: 34 };
        this.center = { x: gameSize.x / 2 + offsetX, y: gameSize.y /2 + offsetY};
        this.oldCenter = { x: this.center.x, y: this.center.y };

        this.spriteKey = {
            WALK_FRONT_Y: 21,
            WALK_LEFT_Y: 44,
            WALK_RIGHT_Y: 63,
            WALK_BACK_Y: 84,
            WALK_X1: 10,
            WALK_X2: 40
        }

        this.spritePosition = { x: this.spriteKey.WALK_X1, y: this.spriteKey.WALK_FRONT_Y };
        this.walkCurrentFrame = 0;
        this.walkSpeed = 20;
        this.walkTotalFrames = 2 * this.walkSpeed;
        this.changeDirectionCount = 5;
        this.stepSize = 4;

        if (direction === "up") { this.spritePosition.y = this.spriteKey.WALK_BACK_Y; }
        else if (direction === "left") { this.spritePosition.y = this.spriteKey.WALK_LEFT_Y; }
        else if (direction === "right") { this.spritePosition.y = this.spriteKey.WALK_RIGHT_Y; }

        this.spriteDirection = direction;
        this.damage = 1;
        this.health = 1;

        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.animateWalk = this.animateWalk.bind(this);
    }

    update() {
        if (this.changeDirectionCount == 0) {
            const direction = parseInt(Math.random() * 4);
            this.changeDirectionCount = 5;

            if (direction === 0) { 
                if (this.spriteDirection === "down") {
                    this.center.y += this.stepSize;
                }
                else {
                    this.spritePosition.y = this.spriteKey.WALK_FRONT_Y; 
                    this.spriteDirection = "down";
                }
            }
            else if (direction === 1) { 
                if (this.spriteDirection === "up") {
                    this.center.y -= this.stepSize;
                }
                else {
                    this.spritePosition.y = this.spriteKey.WALK_BACK_Y; 
                    this.spriteDirection = "up";
                }
            }
            else if (direction === 2) {
                if (this.spriteDirection === "left") {
                    this.center.x -= this.stepSize;
                }
                else {
                    this.spritePosition.y = this.spriteKey.WALK_LEFT_Y;
                    this.spriteDirection = "left";
                }
            }
            else { 
                if (this.spriteDirection === "right") {
                    this.center.x += this.stepSize;
                }
                else {
                    this.spritePosition.y = this.spriteKey.WALK_RIGHT_Y; 
                    this.spriteDirection = "right"
                }
            }
        }
        else if (this.walkCurrentFrame === this.walkTotalFrames - 1) {
            if (this.spriteDirection === "down") { this.center.y += this.stepSize; }
            else if (this.spriteDirection === "up") { this.center.y -= this.stepSize; }
            else if (this.spriteDirection === "left") { this.center.x -= this.stepSize; }
            else { this.center.x += this.stepSize; }
        }
    }

    draw() {
        this.animateWalk();
    }

    animateWalk() {
        const img = document.getElementById('octorok');
        const offset = this.spriteDirection === "right" ? -4 : 0;

        this.game.screen.drawImage(img,
            this.spritePosition.x, this.spritePosition.y,
            this.size.x / 2, this.size.y / 2,
            this.center.x - this.size.x / 2, this.center.y - this.size.y / 2,
            this.size.x, this.size.y);

        this.walkCurrentFrame += 1;
        if (this.walkCurrentFrame % this.walkSpeed === 0) {
            this.spritePosition.x = this.spritePosition.x + (this.spriteKey.WALK_X2 - this.spriteKey.WALK_X1) + offset;
        }

        if (this.walkCurrentFrame === this.walkTotalFrames) {
            this.walkCurrentFrame = 0;
            this.changeDirectionCount -= 1;
            this.spritePosition.x = this.spriteKey.WALK_X1;
        }
    }
}