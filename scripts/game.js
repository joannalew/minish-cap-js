class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.screen = this.canvas.getContext('2d');
        this.gameSize = { x: this.canvas.width, y: this.canvas.height };
        this.bodies = [new Player(this, this.gameSize),
                       new Wall(this, this.gameSize, 65, 35, 0, -50)];

        this.tick = this.tick.bind(this);
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
        this.checkCollision = this.checkCollision.bind(this);

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
                this.bodies[0].center.x = this.bodies[0].oldCenter.x;
                this.bodies[0].center.y = this.bodies[0].oldCenter.y;
                this.bodies[i].center.x = this.bodies[i].oldCenter.x;
                this.bodies[i].center.y = this.bodies[i].oldCenter.y;
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
}

window.onload = function() {
    new Game('screen');
}