class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.screen = this.canvas.getContext('2d');
        this.gameSize = { x: this.canvas.clientWidth, y: this.canvas.height };
        this.bodies = [new Player(this, this.gameSize)];

        this.tick = this.tick.bind(this);
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);

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
    }

    draw() {
        var drawRect = function(screen, body) {
            screen.fillRect(body.center.x - body.size.x / 2,
                            body.center.y - body.size.y / 2,
                            body.size.x, body.size.y);
        }

        this.screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);

        for (let i = 0; i < this.bodies.length; i++) {
            drawRect(this.screen, this.bodies[i]);
        }
    }
}

window.onload = function() {
    new Game('screen');
}