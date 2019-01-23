# Minish Cap JS

[Live Demo](https://joannalew.github.io/)

### Overview

Minish Cap JS is a clone of the game [Zelda: Minish Cap](https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_The_Minish_Cap). The user plays as the character, Link, who lives in the land of Hyrule. The player can wander around Hyrule slaying monsters with a sword.

|![zelda1](https://user-images.githubusercontent.com/22438779/51267171-00afd400-1972-11e9-897e-e11a3378cf54.png) | ![zelda2](https://user-images.githubusercontent.com/22438779/51267375-67cd8880-1972-11e9-9046-7d95688ab1c5.png) | ![zelda3](https://user-images.githubusercontent.com/22438779/51267180-07d6e200-1972-11e9-8608-83e8a4dbc043.png) |
|:-------------------------:|:-------------------------:|:-------------------:|


### Functionality & MVP

In the game, the player can:
* Walk around, moving to different maps
* Swing their sword to attack monsters
* Lose health when attacked
* Collide with fences
* Listen to some chill background music

### Technologies

* Vanilla Javascript for overall structure and game logic
* HTML Canvas for DOM manipulation and rendering
* CSS for styling

### Cool Code

The game has two main functions, `update` and `draw`. In `update`, the game updates where the player currently is, where the enemies are, and any other information. In `draw`, the game clears the previous frame and renders the new frame with its updated state on a HTML Canvas element. Both the `update` and `draw` functions are called roughly 60 times a second with the help of `requestAnimationFrame`.

```javascript
class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.screen = this.canvas.getContext('2d');
        this.screen.imageSmoothingEnabled = false;
        this.gameSize = { x: this.canvas.width, y: this.canvas.height };
        
        // ...more code here
    }
    
    tick() {
        this.update();
        this.draw();
        requestAnimationFrame(this.tick);
    }
}
 ```
 
Sprites are also animated with the help of `requestAnimationFrame`. Since the `draw` function gets called 60 times a second, the only property needed to be changed is the x or y-coordinate of the sprite on the spritesheet. With my spritesheet, I shifted the x-coordinate 32px every couple frames to make it seem like Link is walking.
 
 ```javascript
 class Player {
    constructor(game, gameSize) {
        this.game = game;
        this.gameSize = gameSize;
        this.size = { x: 36, y: 48 };
        this.center = { x: gameSize.x / 2, y: gameSize.y / 2 };
        
        // ...more code here
    }
    
    draw() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE) || this.attackCurrentFrame != 0) {
            // ...code here
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
            this.animateWalk(this.spriteKey.WALK_FRONT_X);
        }
        else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            this.animateWalk(this.spriteKey.WALK_BACK_X);
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
}
```
 
