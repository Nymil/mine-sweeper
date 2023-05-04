class Game {
    constructor() {
        this.fps = 30;
    }

    draw() {
        drawRect('black', [0, 0, _$canvas.width, _$canvas.height]);
    }

    run() {
        setInterval(() => this.draw(), 1000 / this.fps);
    }
}
