class Enemy {
    constructor(game, gameSize, offsetX, offsetY, enemyId, direction) {
        this.game = game;
        this.gameSize = gameSize;
        this.size = { x: 38, y: 34 };
        this.center = { x: gameSize.x / 2 + offsetX, y: gameSize.y / 2 + offsetY };
        this.oldCenter = { x: this.center.x, y: this.center.y };

        this.spriteKey = {
            WALK_FRONT_Y: 21,
            WALK_LEFT_Y: 44,
            WALK_RIGHT_Y: 63,
            WALK_BACK_Y: 84,
            WALK_X1: 10,
            WALK_X2: 40,
            DEATH_0: [130, 22, 0, 0],
            DEATH_1: [130, 45, 0, 0],
            DEATH_2: [130, 58, 0, 4],
            DEATH_3: [130, 84, 0, 0],
            DEATH_4: [9, 106, 0, 0],
            DEATH_5: [39, 106, 0, 0],
            DEATH_6: [72, 106, 4, 0],
            DEATH_7: [104, 106, 10, 0],
            DEATH_8: [164, 25, 14, 0],
            DEATH_9: [208, 25, 14, 0],
            DEATH_10: [254, 25, 12, 0],
            DEATH_11: [163, 46, 12, 0],
            DEATH_12: [207, 46, 12, 0]
        }

        this.spriteImage = document.getElementById('octorok');
        this.spritePosition = { x: this.spriteKey.WALK_X1, y: this.spriteKey.WALK_FRONT_Y };

        this.walkCurrentFrame = 0;
        this.walkSpeed = 20;
        this.walkTotalFrames = 2 * this.walkSpeed;
        this.changeDirectionCount = 5;
        this.stepSize = 4;

        this.deathCurrentFrame = 0;
        this.deathSpeed = 4;
        this.deathTotalFrames = 13 * this.deathSpeed;

        if (direction === "up") { this.spritePosition.y = this.spriteKey.WALK_BACK_Y; }
        else if (direction === "left") { this.spritePosition.y = this.spriteKey.WALK_LEFT_Y; }
        else if (direction === "right") { this.spritePosition.y = this.spriteKey.WALK_RIGHT_Y; }

        this.spriteDirection = direction;
        this.enemyId = enemyId;
        this.damage = 1;
        this.health = 1;

        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.animateWalk = this.animateWalk.bind(this);
        this.animateDeath = this.animateDeath.bind(this);
    }

    update() {
        if (this.health <= 0) {
            this.damage = 0;
        }
        else if (this.changeDirectionCount == 0) {
            const direction = parseInt(Math.random() * 4);
            this.changeDirectionCount = 5;

            if (direction === 0) {
                this.spritePosition.y = this.spriteKey.WALK_FRONT_Y;
                this.spriteDirection = "down";
            }
            else if (direction === 1) {
                this.spritePosition.y = this.spriteKey.WALK_BACK_Y;
                this.spriteDirection = "up";
            }
            else if (direction === 2) {
                this.spritePosition.y = this.spriteKey.WALK_LEFT_Y;
                this.spriteDirection = "left";
            }
            else {
                this.spritePosition.y = this.spriteKey.WALK_RIGHT_Y;
                this.spriteDirection = "right"
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
        if (this.health > 0) {
            this.animateWalk();
        }
        else {
            this.animateDeath();
        }
    }

    animateWalk() {
        const offset = this.spriteDirection === "right" ? -4 : 0;

        this.game.screen.drawImage(this.spriteImage,
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

    animateDeath() {
        const frameIndex = parseInt(this.deathCurrentFrame / this.deathSpeed);
        console.log(frameIndex);
        const frameInfo = this.spriteKey[`DEATH_${frameIndex}`];

        this.game.screen.drawImage(this.spriteImage,
            frameInfo[0], frameInfo[1],
            this.size.x / 2 + frameInfo[2], this.size.y / 2 + frameInfo[3],
            this.center.x - this.size.x / 2 - frameInfo[2] / 2, this.center.y - this.size.y / 2 - frameInfo[3] / 2,
            this.size.x + frameInfo[2], this.size.y + frameInfo[3]);

        this.deathCurrentFrame += 1;
        
        if (this.deathCurrentFrame === this.deathTotalFrames) {
            const gameBodies = this.game.getBodies();
            const enemyIndex = gameBodies.indexOf(gameBodies.find(enemy => enemy.enemyId === this.enemyId));
            gameBodies.splice(enemyIndex, 1);

            const remainingEnemies = document.getElementById('ui-enemy-remaining');
            const currentCount = parseInt(remainingEnemies.innerHTML);
            remainingEnemies.innerHTML = currentCount - 1;
        }
    }
}