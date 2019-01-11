class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.screen = this.canvas.getContext('2d');
        this.gameSize = { x: this.canvas.width, y: this.canvas.height };
        this.mapId = 0;

        this.bodies = [];
        this.player = new Player(this, this.gameSize);
        this.envBodies = loadMap(this, this.gameSize, this.mapId);
        this.bodies = this.bodies.concat(this.player, this.envBodies.walls, this.envBodies.doors);

        this.spritePosition = { x: -3744, y: -1460 };

        this.tick = this.tick.bind(this);
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.checkCollision = this.checkCollision.bind(this);
        this.resetMap = this.resetMap.bind(this);

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

        for (let i = 1; i < this.bodies.length; i++){
            if (this.checkCollision(this.bodies[0], this.bodies[i])) {
                if (this.bodies[i].constructor.name === "Wall") {
                    this.player.center.x = this.player.oldCenter.x;
                    this.player.center.y = this.player.oldCenter.y;
                }
                else if (this.bodies[i].constructor.name === "Door") {
                    this.spritePosition.x += this.gameSize.x * this.bodies[i].mapX;
                    this.spritePosition.y += this.gameSize.y * this.bodies[i].mapY;
                    this.canvas.style.backgroundPosition = `${this.spritePosition.x}px ${this.spritePosition.y}px`;
                    this.player.center.y -= 4;
                    this.resetMap();
                }
            }
        }
    }

    draw() {
        for (let i = 0; i < this.bodies.length; i++) {
            this.bodies[i].draw();
        }
    }

    checkCollision(body1, body2) {
        return !(body1 === body2 || 
                 body1.center.x + body1.size.x / 2 < body2.center.x - body2.size.x / 2 ||
                 body1.center.y + body1.size.y / 2 < body2.center.y - body2.size.y / 2 || 
                 body1.center.x - body1.size.x / 2 > body2.center.x + body2.size.x / 2 ||
                 body1.center.y - body1.size.y / 2 > body2.center.y + body2.size.y / 2);
    }

    resetMap() {
        this.screen.clearRect(0, 0, 480, 320);
        this.bodies.splice(1);
        this.mapId += 1;
        this.bodies.concat(loadMap(this, this.gameSize, this.mapId));
    }
}

window.onload = function() {
    new Game('screen');
}