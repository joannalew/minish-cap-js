class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.screen = this.canvas.getContext('2d');
        this.screen.imageSmoothingEnabled = false;
        this.gameSize = { x: this.canvas.width, y: this.canvas.height };
        this.mapId = "m00";

        this.bodies = [];
        this.player = new Player(this, this.gameSize);
        this.envBodies = loadMap(this, this.gameSize, this.mapId);
        this.bodies = this.bodies.concat(this.player, this.envBodies.enemies);

        this.hurtSound = document.getElementById("hurt");
        this.spritePosition = { x: -3744, y: -1460 };
        this.knockbackStep = 30;

        this.tick = this.tick.bind(this);
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.checkCollision = this.checkCollision.bind(this);
        this.getBodies = this.getBodies.bind(this);

        this.tick();
    }
    
    tick() {
        this.update();
        this.draw();
        requestAnimationFrame(this.tick);
    }

    update() {
        for (let i = 0; i < this.bodies.length; i++) {
            this.bodies[i].update();
        }

        for (let i = 1; i < this.bodies.length; i++) {
            if (this.checkCollision(this.bodies[0], this.bodies[i])) {
                if (this.bodies[i].damage > 0) {
                    const heart = document.getElementById(`heart${this.player.health}`);
                    heart.style.display = "none";
                    this.hurtSound.play();

                    this.player.health -= this.bodies[i].damage;

                    if (this.player.spriteDirection === "down") { this.player.center.y -= this.knockbackStep; }
                    else if (this.player.spriteDirection === "up") { this.player.center.y += this.knockbackStep; }
                    else if (this.player.spriteDirection === "left") { this.player.center.x += this.knockbackStep; }
                    else { this.player.center.x -= this.knockbackStep; }
                }
            }
        }
    }

    draw() {
        this.screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
        for (let i = 0; i < this.bodies.length; i++) {
            this.bodies[i].draw();
        }
    }

    checkCollision(body1, body2) {
        return !(body1 === body2 || 
                 body1.center.x + body1.size.x / 2 < body2.center.x - body2.size.x / 4 ||
                 body1.center.y + body1.size.y / 2 < body2.center.y - body2.size.y / 4 || 
                 body1.center.x - body1.size.x / 2 > body2.center.x + body2.size.x / 4 ||
                 body1.center.y - body1.size.y / 2 > body2.center.y + body2.size.y / 4);
    }

    changeBackgroundX(num) {
        this.spritePosition.x += num;
        this.canvas.style.backgroundPosition = `${this.spritePosition.x}px ${this.spritePosition.y}px`;
        for (let i = 1; i < this.bodies.length; i++) {
            this.bodies[i].center.x += num;
        }
    }

    changeBackgroundY(num) {
        this.spritePosition.y += num;
        this.canvas.style.backgroundPosition = `${this.spritePosition.x}px ${this.spritePosition.y}px`;
        for (let i = 1; i < this.bodies.length; i++) {
            this.bodies[i].center.y += num;
        }
    }

    setBackgroundX(num) {
        const diff = num - this.spritePosition.x;
        this.spritePosition.x = num;
        this.canvas.style.backgroundPosition = `${this.spritePosition.x}px ${this.spritePosition.y}px`;
        for (let i = 1; i < this.bodies.length; i++) {
            this.bodies[i].center.x += diff;
        }
    }

    setBackgroundY(num) {
        const diff = num - this.spritePosition.y;
        this.spritePosition.y = num;
        this.canvas.style.backgroundPosition = `${this.spritePosition.x}px ${this.spritePosition.y}px`;
        for (let i = 1; i < this.bodies.length; i++) {
            this.bodies[i].center.y += diff;
        }
    }

    getBackgroundPositionX() {
        return this.spritePosition.x * -1;
    }

    getBackgroundPositionY() {
        return this.spritePosition.y * -1;
    }

    getBodies() {
        return this.bodies;
    }
}

window.onload = function() {
    const g = new Game('screen');
};